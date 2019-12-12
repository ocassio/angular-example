import { Component, Output, EventEmitter } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.less']
})
export class NewItemComponent {

  constructor(private router: Router,
              private itemsService: ItemsService) {
  }

  add(item: ItemModel): void {
    this.itemsService.addItem(item).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }

}
