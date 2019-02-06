import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  latitude: number;
  longitude: number;
  zoom: number;
  isOpen: boolean;

  constructor() {
    this.zoom = 12;
    this.isOpen = true;
  }

  ngOnInit() {
    // Ocean seafood bar
    this.latitude = -37.7883489;
    this.longitude = 145.1159538;
  }

}
