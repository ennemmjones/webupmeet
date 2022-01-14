import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Events } from "../models/Events";
@Injectable({
    providedIn: 'root',
}

)
export class EventsApiService {

    constructor(
        private httpClient: HttpClient

    ) { }

    
    

    
    getEvents(): Observable<Events[]> {
        return this.httpClient.get<Events[]>("https://localhost:44347/events/list")
    }
    createEvent(event: Events): Observable<Events> {
        return this.httpClient.post<Events>("https://localhost:44347/events/new/", event)
    }
}