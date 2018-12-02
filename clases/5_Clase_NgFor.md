# Ciclo Repetitivo FOR 

NgFor es una directiva estructural que afecta (agrega, modifica o elimina) un elemento HTML. Las directivas estructurales las identificamos porque llevan un * antes de la directiva, por ejemplo: *ngFor

NgFor nos permite recorrer un arreglo de datos y por cada elemento generar o imprimir en el DOM un elemento HTML nuevo, con algún valor cambiado basado en el elemento leído del arreglo.

#### Ejemplo 

```
<p *ngFor="let u of users; let i = index" >
  {{ i + 1 }} {{u.nick}} - {{u.idu}}
  
</p>

```
