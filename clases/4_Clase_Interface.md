# Interface

Se Usar para definir tipos de datos personalizados 

## Uso:

*   Se Crea una Carpeta inferface

*   Luego se crea un archivo con el nombre del tipo de dato, por ejemplo, ./interface/user.ts

* Dentro del archivo se exporta la interface para ser usada 

* Se define los tipo de datos que puede contener un objecto 

* Se establece cuales son los opcionales agregando ? al final de la declaracion del nombre de la variable 

* Se importa en el componente a utilizar 

#### Ejemplo 

##### ./interface/user.ts

```
export interface User{

    // Requerido 
    nick: string;
    sub_nick?: string;
    // Opcional
    age?: number;
    friend?: boolean;
    idu: any;
}
 ```

##### ./home/home.component.ts

```
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

```