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

const routes: Routes = [
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
    NewItemComponent,
    ItemCardComponent,
    ItemsSearchComponent,
    ItemsListComponent,
    ItemDetailsComponent
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
