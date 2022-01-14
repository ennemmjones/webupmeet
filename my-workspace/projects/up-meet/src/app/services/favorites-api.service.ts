import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Events } from "../models/Events";
import { Favorites } from "../models/Favorites";
@Injectable({
    providedIn: 'root',
}

)
export class FavoritesApiService {

    constructor(
        private httpClient: HttpClient

    ) { }

    
    

    
    getFavorites(): Observable<Favorites[]> {
        return this.httpClient.get<Favorites[]>("https://localhost:44347/favorites/list")
    }

    createFavorite(favorite: Favorites): Observable<Favorites> {
        return this.httpClient.post<Favorites>("https://localhost:44347/favorites/new/", favorite)
    }

    deleteFavorite(id: Number): Observable<unknown> {
        return this.httpClient.delete(`https://localhost:44347/favorites/remove?ID=${ id }`)
    }

}