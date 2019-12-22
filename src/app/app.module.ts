import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemsSearchComponent } from './components/items-search/items-search.component';
import { ItemsListComponent } from "./components/items-list/items-list.component";
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { TheHeaderComponent } from './components/the-header/the-header.component';
import { ViewItemDetailsComponent } from './components/view-item-details/view-item-details.component';
import { LocalStorageGuard } from './guards/local-storage.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalHttpInterceptor } from './interceptors/universal.http.interceptor';

const routes: Routes = [
  {
    path: 'items/new',
    component: NewItemComponent,
    canActivate: [LocalStorageGuard]
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
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UniversalHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
