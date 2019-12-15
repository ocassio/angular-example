import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import uuid from 'uuid/v1'
import { ItemModel } from '../models/item.model';

const DELAY_TIME = 1000;
const LS_KEY = "items";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: ItemModel[];

  constructor() {
    this.items = JSON.parse(localStorage.getItem(LS_KEY)) || [];
  }

  getItems(search: string = ''): Observable<ItemModel[]> {
    const items = this.items.filter(item => {
      const s = search.toLowerCase();
      return item.firstName.toLowerCase().includes(s)
        || item.lastName.toLowerCase().includes(s);
    });
    return of(items).pipe(delay(DELAY_TIME));
  }

  getItem(id: string): Observable<ItemModel> {
    const item = this.items.find(item => item.id === id);
    return of(item).pipe(delay(DELAY_TIME));
  }

  addItem(item: ItemModel): Observable<void> {
    this.items.push({
      id: uuid(),
      ...JSON.parse(JSON.stringify(item))
    });
    this.saveItems();
    return of(null).pipe(delay(DELAY_TIME));
  }

  deleteItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
    this.saveItems();
  }

  private saveItems(): void {
    localStorage.setItem(LS_KEY, JSON.stringify(this.items));
  }
}
