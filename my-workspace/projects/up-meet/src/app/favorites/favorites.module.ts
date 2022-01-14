import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FavoriteListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FavoritesModule { }
