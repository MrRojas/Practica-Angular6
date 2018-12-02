# Creando un servicio de usuarios e Inyectando el servicio en nuestros componentes

Un servicio es una clase que puede ser inyectada en uno o varios componentes y que es muy útil para compartir datos o funciones entre éstos, evitando la duplicidad de código.

Se crean a través del Angular CLI con el siguiente comando:

```
ng generate service <directorio>/<nombre del servicio>
```
Al ejecutar este comando se generan en nuestro proyecto los siguientes archivos:
```
/<directorio>
  <nombre del servicio>.service.spec.ts
  <nombre del servicio>.service.ts
```

Luego en el componente, inyectamos el Servicio de manera similar a cómo inyectamos el ActivatedRoute.


#### Ejemplo 


###### un servicio 

```
import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class ListOfFriendsService {
  
  users: User []
  
  constructor() {
    this.users = [
      {
        nick : 'MrRojas' ,
        age: 21,
        idu : 'Javascript',
        friend: true
      },
      {
        nick : 'Monpeco' ,
        age: 36,
        idu : 'C',
        friend: false
      },
      {
        nick : 'APerdomo' ,
        age: 22,
        idu : 'Angular',
        friend: true
      },
      {
        nick : 'EE' ,
        age: 38,
        idu : 'PHP',
        friend: false
      },
      {
        nick : 'Yris' ,
        age: 15,
        idu : 'ORACLE',
        friend: true
      }
  
     ];
   }

 public get_usuarios(){

    return this.users;
     
  }
}


```


###### conversation.componet.ts 

```
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

```



