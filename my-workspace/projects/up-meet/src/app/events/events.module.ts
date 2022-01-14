import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleEventComponent } from './single-event/single-event.component';
import { EventPreviewsComponent } from './event-previews/event-previews.component';
import { EventListComponent } from './event-list/event-list.component';
import { NewEventComponent } from './new-event/new-event.component';
import { FormsModule } from '@angular/forms';
import { FavoritesModule } from '../favorites/favorites.module';



@NgModule({
  declarations: [
    SingleEventComponent,
    EventPreviewsComponent,
    EventListComponent,
    NewEventComponent
  ],  
  imports: [
    CommonModule,
    FormsModule,
    FavoritesModule
  ]
})
export class EventsModule { }
