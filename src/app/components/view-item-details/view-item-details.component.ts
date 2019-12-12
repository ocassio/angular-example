import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unsubscribable } from 'rxjs';
import { ItemsService } from 'src/app/services/items.service';
import { switchMap } from 'rxjs/operators';
import { ItemModel } from 'src/app/models/item.model';

@Component({
    selector: 'view-item-details',
    templateUrl: './view-item-details.component.html'
})
export class ViewItemDetailsComponent implements OnInit, OnDestroy {

    item: ItemModel;

    private subscription: Unsubscribable;

    constructor(private route: ActivatedRoute,
                private itemsService: ItemsService) {
    }

    ngOnInit(): void {
        this.subscription = this.route.params.pipe(
            switchMap(params => this.itemsService.getItem(params.id))
        ).subscribe(item => this.item = item);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}