import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  linkToHome: String = '#';
  linkToFavorites: String = '#';
  addEvent: String = '#';
  constructor() { }

  ngOnInit(): void {
    this.linkToHome =`/home`
    this.linkToFavorites =`/favorites/list`
    this.addEvent='/new'
  }

}
