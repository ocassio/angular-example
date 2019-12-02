import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.less']
})
export class ItemCardComponent {

  @Input()
  name: string;

  @Output()
  delete = new EventEmitter<void>();

  onDelete(): void {
    this.delete.emit();
  }

}
