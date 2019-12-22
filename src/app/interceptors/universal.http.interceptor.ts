import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Optional, Inject } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Injectable()
export class UniversalHttpInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject(REQUEST) protected request: any) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let serverReq: HttpRequest<any> = req;
    if (this.request) {
      let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
      if (!req.url.startsWith('/')) {
        newUrl += '/';
      }
      newUrl += req.url;
      serverReq = req.clone({url: newUrl});
    }
    return next.handle(serverReq);
  }

}
