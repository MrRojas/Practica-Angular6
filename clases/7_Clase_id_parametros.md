# Navegación con parámetros

Al navegar entre pantallas, hay ocasiones en las que es necesario pasar datos particulares. Usando routerLink podemos incluir parámetros de manera similar a como lo hacemos con subdominios o subdirectorios. Para recibir e interpretar estos parámetros correctamente es necesario definir las rutas específicas en appRoutes y consultarlos luego en el componente con el objeto ActivatedRoute.

## Pasos a Seguir 

*   Se agrega en un elemento <a> el atributo routerLink="/rutaEjemplo/´{{miObj.miVar}}"

* Luego se agrega en app.module.ts a la ruta con parametro, por ejemplo {path: 'conversation/:uid', component: ConversationComponent}

* Luego en el component se captura el parametro con ActivatedRoute


#### Ejemplo 


###### convesation.componet.html 

```
<h1>Amigos</h1>
<ng-container *ngFor="let u of users; let i = index;">
  <p>
    <ng-container *ngIf="u.friend" >
        <a routerLink="/conversation/{{u.idu}}"  > 
        {{i + 1 }}. {{u.nick}} - {{u.idu}}
        </a>
    </ng-container>
        
        
  </p>
  </ng-container>

  <h1>Desconocidos</h1>
  <ng-container *ngFor="let u of users; let i = index;">

  <p> 
      <ng-container *ngIf="!u.friend" > 
          <a routerLink="/conversation/{{u.idu}}"  >
          {{i + 1 }}. {{u.nick}} - {{u.idu}}
          </a>
      </ng-container>
  </p>
      
</ng-container>


```


###### app.module.ts 

```
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'conversation/:uid', component: ConversationComponent}
];

```



###### conversation.component.ts 

```
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

```
