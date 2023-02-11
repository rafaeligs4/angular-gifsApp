import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
//View Child
//Not null assetion operator
@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

         buscar(){

          const elemento = this.txtBuscar.nativeElement.value;
               console.log(elemento);

         this.txtBuscar.nativeElement.value="";
         }
}
