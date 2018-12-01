import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 

    let usuario: User = {

      nick : 'MrRojas' ,
      age: 21,
      idu : 'RA_CUSTOMER_TRX_ALL'
    }
  }

  ngOnInit() {
  }

}
