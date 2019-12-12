import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemsSearchComponent } from './components/items-search/items-search.component';
import { ItemsListComponent } from "./components/items-list/items-list.component";
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { TheHeaderComponent } from './components/the-header/the-header.component';
import { ViewItemDetailsComponent } from './components/view-item-details/view-item-details.component';

const routes: Routes = [
  {
    path: 'items/new',
    component: NewItemComponent
  },
  {
    path: 'items/:id',
    component: ViewItemDetailsComponent
  },
  {
    path: 'items',
    component: ItemsListComponent
  },
  {
    path: '**',
    redirectTo: '/items'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TheHeaderComponent,
    NewItemComponent,
    ItemCardComponent,
    ItemsSearchComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    ViewItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
