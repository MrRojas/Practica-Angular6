import { Component, OnInit } from '@angular/core';
import { ListOfFriendsService } from '../service/list-of-friends.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any; 

  constructor(private list: ListOfFriendsService) { 
    this.users = list.get_usuarios()
  }

  ngOnInit() {
  }

}
