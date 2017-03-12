import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nDays:number;
  constructor() { 
    this.nDays=7;
  }

  ngOnInit() {
  }

}
