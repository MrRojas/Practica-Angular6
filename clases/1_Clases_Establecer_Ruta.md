# 1era Clases 

## Establecer la ruta principal 

* Primero se crear el componente con angular CLI

* Despues se Agrega el componente en bootstrap 

* En el archivo index.html se cambia el selector app-root al selector del componente 

* Declarar El componente Router de @angular/router 

* Definir las rutas en una constante 

* Declaramos dentro de imports la dependencia RouterModule.forRoot(appRoutes) donde appRoutes es la constante de las rutas 

* Borramos el app.component.html y agregamos el tag router-link

#### Ejemplo:

##### app.module.ts 

``` 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConversationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }

```

##### Selector en index.html  

```
  <app-login></app-login>

```

#### Declarar Ruta en app.module.ts y definir una constantes con las rutas 

```
import {Routes}  from '@angular/router';

const appRoutes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'conversation' , component: ConversationComponent},
  { path: 'profile' , component: ProfileComponent},
  { path: 'login' , component: LoginComponent}
];


```

##### Agregar El modulo de Routers en los imports de app.module.ts

``` 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConversationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule , 


    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [LoginComponent]
})

```

##### Modificacion de app.component.html 

```

<router-outlet></router-outlet>

```


