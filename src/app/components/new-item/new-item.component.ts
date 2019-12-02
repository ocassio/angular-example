import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.less']
})
export class NewItemComponent {

  @Output()
  add = new EventEmitter<string>();

  name: string;

  onAddClick(): void {
    if (this.name.trim()) {
      this.add.emit(this.name);
      this.name = '';
    }
  }

}
