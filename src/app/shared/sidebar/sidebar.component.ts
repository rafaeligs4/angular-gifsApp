import { Component } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gS: GifsService){

  }
    get historial(){
       return this.gS.historial;
    }
    buscar(termino: string){
      this.gS.buscarGifs(termino);
    }
   
}
