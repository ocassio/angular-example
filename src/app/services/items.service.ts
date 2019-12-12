import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

const DELAY_TIME = 1000;

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: string[] = ['Test 1', 'Test 2'];

  getItems(search: string = ''): Observable<string[]> {
    const items = this.items.filter(item => item.toLowerCase().includes(search.toLowerCase()));
    return of(items).pipe(delay(DELAY_TIME));
  }

  addItem(item: string): Observable<void> {
    this.items.push(item);
    return of(null).pipe(delay(DELAY_TIME));
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
