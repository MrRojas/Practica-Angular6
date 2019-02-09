# Pipes en Angular (date, number, json)
Los pipes en angular, son elementos que se pueden incluir en el HTML y nos permiten aplicar transformaciones a los datos antes de mostrarlos.

Algunos de los pipes más usados son:

* json
* number: ‘<formato-decimal>’
* date: ‘<formato de fecha>’

Puedes consultar más formatos en la documentación oficial de Angular - Pipes.

https://angular.io/guide/pipes

#### Ejemplo 

```
<p>
  Conversa con  tu amigo  {{user.nick}}
</p>

<p>
  Dinero disponible pa' Bebe Cucuy de Penca {{ price | number: '1.2-2'  }}  
</p>

<p>
    Dinero disponible pa' el Hielo {{ price2 | number: '1.2-2'  }}  
  </p>


```






