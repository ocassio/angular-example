import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.less']
})
export class ItemCardComponent {

  @Input()
  item: ItemModel;

  @Output()
  delete = new EventEmitter<void>();

  onDelete(): void {
    this.delete.emit();
  }

}
