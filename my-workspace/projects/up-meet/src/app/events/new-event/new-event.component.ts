import { Component, OnInit } from '@angular/core';
import { Events } from '../../models/Events';
import { EventsApiService } from '../../services/events-api.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  //event: Events = {eventID: 0, title: 'New', date: '2021-12-13T15:00:00', location: 'park', organization: 'scouts', details: 'none'}
  eventID = 0;
  title = "";
  date = "";
  location = "";
  organization = "";
  details = "";


  constructor(
    private eventAPISVC: EventsApiService
  ) { }

  ngOnInit(): void {
    //this.newEvent();
  }
newEvent() {
  let event = new Events(this.eventID, this.title, this.date, this.location, this.organization, this.details)
  this.eventAPISVC.createEvent(event).subscribe((events) => {
    console.log("[INFO]")
    console.log(events);
    
})
}

}
// public eventID: Number, 
//         public title: String,
//         public date: String,
//         public location: String,
//         public organization: String,
//         public details: String
