# NgIf aplicado en la lista de usuarios

NgIF es una directiva estructural de Angular que evalúa un valor o una expresión buleana, en función de la cual se mostrará o no, un elemento HTML. El elemento se mostrará sólo cuando la condición sea verdadera (true)


#### Ejemplo 

```
<h1>Amigos</h1>
<ng-container *ngFor="let u of users; let i = index;">
  <p>
    <ng-container *ngIf="u.friend" > 
        {{i + 1 }}. {{u.nick}} - {{u.idu}}
    </ng-container>
        
        
  </p>
  </ng-container>

  <h1>Desconocidos</h1>
  <ng-container *ngFor="let u of users; let i = index;">

  <p> 
      <ng-container *ngIf="!u.friend" > 
          {{i + 1 }}. {{u.nick}} - {{u.idu}}
      </ng-container>
  </p>
      
</ng-container>

```
