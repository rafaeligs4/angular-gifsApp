import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
//View Child
//Not null assetion operator
@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
        constructor(
          private gifsService: GifsService
        ){

        }
         buscar(){

          const elemento = this.txtBuscar.nativeElement.value;
           
          this.gifsService.buscarGifs(elemento);
         this.txtBuscar.nativeElement.value=""; 
          
         }
}
