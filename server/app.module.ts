import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { ItemsController } from './src/items/items.controller';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../dist/server-build/main'),
      liveReload: true
    })
  ],
  controllers: [ItemsController]
})
export class ApplicationModule {}
