import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListOfFriendsService } from '../service/list-of-friends.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  id: any;
  user: User; 

  constructor(private activatedRouter: ActivatedRoute , private list: ListOfFriendsService ) { 

    this.id = activatedRouter.snapshot.params['uid']

    this.user = list.get_usuarios().find((record)=>{
      return record.idu ==  this.id;
    })
    
  }

  ngOnInit() {
  }

}
