import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class ListOfFriendsService {

  constructor() { }

 public static get_usuarios(){

   let users: User [] = [
    {
      nick : 'MrRojas' ,
      age: 21,
      idu : 'Javascript'
    },
    {
      nick : 'Monpeco' ,
      age: 36,
      idu : 'C'
    },
    {
      nick : 'APerdomo' ,
      age: 22,
      idu : 'Angular'
    },
    {
      nick : 'EE' ,
      age: 38,
      idu : 'PHP'
    },
    {
      nick : 'Yris' ,
      age: 15,
      idu : 'ORACLE'
    }

   ];


    return users;
    
    
  }
}
