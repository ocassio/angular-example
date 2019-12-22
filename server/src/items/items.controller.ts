import { Controller, Get, Post, HttpCode, Param, Query, Delete, Body } from '@nestjs/common';
import { ItemModel } from '../models/item.model';
import * as uuid from 'uuid/v1';

@Controller('items')
export class ItemsController {

  items: ItemModel[] = [];

  @Get()
  getAll(@Query('search') search: string = ''): ItemModel[] {
    const s = search.toLowerCase();
    return this.items.filter(item =>
      item.firstName.toLowerCase().includes(s) || item.lastName.toLowerCase().includes(s)
    );
  }

  @Get(':id')
  get(@Param('id') id: string): ItemModel {
    return this.items.find(item => item.id === id);
  }

  @Post()
  @HttpCode(201)
  add(@Body() item: ItemModel): void {
    this.items.push({
      id: uuid(),
      ...item
    });
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

}
