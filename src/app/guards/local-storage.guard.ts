import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageGuard implements CanActivate {

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const forbidAddition = localStorage.getItem('forbidAddition');
        if (!forbidAddition) {
            return true;
        }

        return !JSON.parse(forbidAddition);
    }
}