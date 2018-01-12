import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { MoodItemComponent } from './mood-item.component';
import { MoodItemListComponent } from './mood-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MoodItemLogComponent } from './mood-item-log.component';
import { MoodItemFormComponent } from './mood-item-form.component';
import { MoodItemService } from './mood-item.service';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';
import { APP_BASE_HREF} from '@angular/common'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
  ],
  declarations: [
    AppComponent,
    MoodItemComponent,
    MoodItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MoodItemFormComponent,
    MoodItemLogComponent
  ],
  providers: [
    MoodItemService,
    { provide: lookupListToken, useValue: lookupLists },
    { provide: XHRBackend, useClass: XHRBackend },
    //Enter app at this point - home
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}