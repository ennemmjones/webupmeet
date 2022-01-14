import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsApiService } from './services/events-api.service';
import { FavoritesModule } from './favorites/favorites.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FavoritesModule
    
  ],
  providers: [EventsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
