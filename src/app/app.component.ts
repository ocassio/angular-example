import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  items: string[] = [];

  addNewItem(name: string): void {
    this.items.unshift(name);
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

}
