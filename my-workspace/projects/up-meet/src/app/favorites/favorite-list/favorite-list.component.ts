import { Component, OnInit } from '@angular/core';
import { Events } from '../../models/Events';
import { Favorites } from '../../models/Favorites';
import { EventsApiService } from '../../services/events-api.service';
import { FavoritesApiService } from '../../services/favorites-api.service';


@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  favorites: Favorites[] = [];
  events: Events[] = [];

  userID: String = "N/A";
  userFavorites: Favorites[] = [];
  userEvents: Events[] = [];
  ID: Number = 0;
  combinedList: Events[] = [];

  constructor(
    private favoriteAPISvc: FavoritesApiService,
    private eventsAPISvc: EventsApiService

  ) { }
  

  ngOnInit(): void {
    this.addDefaultFavorites();
    this.addDefaultEvents();
  }

  addDefaultFavorites() {
    this.favoriteAPISvc.getFavorites().subscribe((favorites => {
      console.log("[INFO]")
      console.log(favorites);
      this.favorites = favorites
    }))
}

addDefaultEvents() {
  this.eventsAPISvc.getEvents().subscribe((events) => {
    console.log("[INFO]")
    console.log(events);
    this.events = events
  })
}


userFavoriteList() {
  let userInput = this.userID;
  let favorites = this.favorites;
  this.userFavorites = favorites.filter((favorite) => favorite.userID == userInput)
  console.log("[INFO userFavorites]")
  console.log(this.userFavorites)
  this.userEventsList();
  this.mergedListAddingFavoriteDetailsToEvents();
}

mergedListAddingFavoriteDetailsToEvents() {
  let userFavorites = this.userFavorites;
  let events = this.events;
  for (let i = 0; i < userFavorites.length; i++) {
    
    let singleEvent = events.find(e => e.eventID === userFavorites[i].eventID) 
    if (singleEvent != null){
      singleEvent.id = userFavorites[i].id;
      singleEvent.eventID = userFavorites[i].eventID;
      this.combinedList.push(singleEvent);

    }

  }

}

userEventsList() {
  let userFavorites = this.userFavorites;
  let events  = this.events;
  let favoriteEventIDList: Number[] = userFavorites.map(favorite => favorite.eventID); // a list of all eventIDs in a users
  this.userEvents = events.filter((event) => favoriteEventIDList.includes(event.eventID))
  console.log("[INFO userEvents]")
  console.log(this.userEvents);
}
deleteFavorite(id: Number | undefined) {
  if (id != undefined)
  this.favoriteAPISvc.deleteFavorite(id).subscribe();
  window.location.reload();
}




}

