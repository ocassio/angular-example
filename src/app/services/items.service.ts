import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import uuid from 'uuid/v1'
import { ItemModel } from '../models/item.model';

const DELAY_TIME = 1000;

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: ItemModel[] = [
    {
      id: uuid(),
      name: 'Vasya'
    },
    {
      id: uuid(),
      name: 'Petya'
    }
  ];

  getItems(search: string = ''): Observable<ItemModel[]> {
    const items = this.items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    return of(items).pipe(delay(DELAY_TIME));
  }

  getItem(id: string): Observable<ItemModel> {
    const item = this.items.find(item => item.id === id);
    return of(item).pipe(delay(DELAY_TIME));
  }

  addItem(item: ItemModel): Observable<void> {
    this.items.push({
      id: uuid(),
      ...item
    });
    return of(null).pipe(delay(DELAY_TIME));
  }

  deleteItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}
