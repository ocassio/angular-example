import { Component, OnInit, OnDestroy } from "@angular/core";
import { ItemsService } from 'src/app/services/items.service';
import { ActivatedRoute } from '@angular/router';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html'
})
export class ItemsListComponent implements OnInit, OnDestroy {

  loading = true;
  items: string[];

  private search: string;

  private subscription: Unsubscribable;

  constructor(private route: ActivatedRoute,
              private itemsService: ItemsService) {
  }

  ngOnInit(): void {
    this.subscription = this.route.queryParamMap.subscribe(params => {
      this.search = params.get('search') || '';
      this.loadItems(this.search);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteItem(index: number) {
    this.itemsService.deleteItem(index);
    this.loadItems(this.search);
  }

  private loadItems(search: string): void {
    this.loading = true;
    this.itemsService.getItems(search).subscribe(items => {
      this.items = items;
      this.loading = false;
    });
  }

}
