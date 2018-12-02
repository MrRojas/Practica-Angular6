import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  id: any;

  constructor(private activatedRouter: ActivatedRoute ) { 

    this.id = activatedRouter.snapshot.params['uid']
  }

  ngOnInit() {
  }

}
