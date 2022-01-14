import { Component, OnInit } from '@angular/core';
import { Events } from '../../models/Events';
import { EventsApiService } from '../../services/events-api.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Events[] = []
  
  

  constructor(
    private eventsAPISvc: EventsApiService
  ) { }

  ngOnInit(): void {
    
    this.addDefaultEvents();
   
  }
  
  addDefaultEvents() {
    this.eventsAPISvc.getEvents().subscribe((events) => {
      console.log("[INFO]")
      console.log(events);
      this.events = events
    })
}

}
