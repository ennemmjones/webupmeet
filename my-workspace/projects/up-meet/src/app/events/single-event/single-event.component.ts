import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'
import { Events } from '../../models/Events';
import { Favorites } from '../../models/Favorites';
import { EventsApiService } from '../../services/events-api.service';
import { FavoritesApiService } from '../../services/favorites-api.service';


@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  events?: Events ;
  @Input() event!: Events;
  eventId: Number = 0;
  title: String = "N/A";
  date: String = "N/A";
  location: String = "N/A";
  organization: String = "N/A";
  details: String = "N/A";
  userID: String = "";
  ID: Number = 0;
 
  
  

  constructor(
    private eventsAPISvc: EventsApiService,
    private route: ActivatedRoute,
    private router: Router,
    private favoritesAPISvc: FavoritesApiService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.eventId = Number(id);
    }
    // const date = this.route.snapshot.queryParamMap

    // if(date) {
    //   this.dateId = date;
    // }
    this.eventsAPISvc.getEvents().subscribe((events) => {
     for(var i = 0; i < events.length; i++)
     {if (events[i].eventID == this.eventId)
      {
        this.events = events[i]
      }

     }
     console.log(this.events?.eventID)
      
    })

  

    this.eventsAPISvc.getEvents().subscribe((events) => {
      for(var i = 0; i < events.length; i++)
      {if (events[i].title == this.title)
       {
         this.events = events[i]
       }
 
      }
      console.log(this.events?.title)
       
     })


     this.eventsAPISvc.getEvents().subscribe((events) => {
      for(var i = 0; i < events.length; i++)
      {if (events[i].date == this.date)
       {
         this.events = events[i]
       }
 
      }
      console.log(this.events?.date)
       
     })

     this.eventsAPISvc.getEvents().subscribe((events) => {
      for(var i = 0; i < events.length; i++)
      {if (events[i].location == this.location)
       {
         this.events = events[i]
       }
 
      }
      console.log(this.events?.location)
       
     })

     this.eventsAPISvc.getEvents().subscribe((events) => {
      for(var i = 0; i < events.length; i++)
      {if (events[i].organization == this.organization)
       {
         this.events = events[i]
       }
 
      }
      console.log(this.events?.organization)
       
     })
     this.eventsAPISvc.getEvents().subscribe((events) => {
      for(var i = 0; i < events.length; i++)
      {if (events[i].details == this.details)
       {
         this.events = events[i]
       }
 
      }
      console.log(this.events?.details)
       
     })

  }
  goToEvents() {
    this.router.navigate(["home"])
  }
  newFavorite() {
    let favorite  = new Favorites(this.ID, this.eventId, this.userID)
    this.favoritesAPISvc.createFavorite(favorite).subscribe((favorite) => {
      console.log("STUFF")
      console.log(favorite);
      
  })
  }

}

// public eventID: Number, 
// public title: String,
// public date: String,
// public location: String,
// public organization: String,
// public details: String