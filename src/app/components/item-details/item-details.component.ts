import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent {

  @Input()
  item: ItemModel = {
    name: ''
  };

  @Input()
  readonly: boolean = false;

  @Output()
  submitItem = new EventEmitter<ItemModel>();

  onSubmit(): void {
    if (this.item.name.trim()) {
      this.submitItem.emit(this.item);
    }
  }

}
