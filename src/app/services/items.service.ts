import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError } from "rxjs/operators";
import uuid from 'uuid/v1'
import { ItemModel } from '../models/item.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) {
  }

  getItems(search?: string): Observable<ItemModel[]> {
    const params = new HttpParams();
    if (search) {
      params.append('search', search);
    }

    return this.httpClient.get<ItemModel[]>('/api/items', { params });
  }

  getItem(id: string): Observable<ItemModel> {
    return this.httpClient.get<ItemModel>(`/api/items/${id}`);
  }

  addItem(item: ItemModel): Observable<void> {
    return this.httpClient.post<void>('/api/items', item);
  }

  deleteItem(id: string): Observable<void> {
    return this.httpClient.delete<void>(`/api/items/${id}`);
  }
}
