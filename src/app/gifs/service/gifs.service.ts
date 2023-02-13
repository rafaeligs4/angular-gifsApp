import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({

  //Esto engloba al servicio si la necesidad de agregarlo en un modulo 
  providedIn: 'root'
})
export class GifsService{
  private _historial: string[] = [];
  private apiGiphy_key: string= 'JLMWNfiBIlrX0n9yPF3LokFbnyYV2rx5';
  private servicio_URL: string= 'https://api.giphy.com/v1/gifs' ;
  public resultados: Gif[] =[];
  //Obtener el historial
  get historial(){    
    //OPERADOR SPREAD
    return [...this._historial];
  }
  constructor(
    //Es un objeto del httpclientModule que se encarga de faciliar el consumo de API
    private http: HttpClient
  ){
    this._historial= JSON.parse(localStorage.getItem('historial')!) || [];   
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];   
  }
  //Busqueda de gifs
  buscarGifs(query: string){
   
    //Esto es para verificar si existe el valor para evitar repeticiones  
    if(!this._historial.includes(query)){
   //Para convertir en minusculas    
      query=query.toLowerCase();
    //Agregar de ultimo el Historial
    this._historial.unshift(query);
    }     
    this._historial=this._historial.splice(0,10);
    localStorage.setItem('historial',JSON.stringify(this._historial));
    console.log(this._historial);

    const params = new HttpParams()
    .set('api_key',this.apiGiphy_key)
    .set('limit','10')
    .set('q',query);
    this.http.get<SearchGifsResponse>(`${this.servicio_URL}/search`,{params})
    .subscribe( (resp)=>{
      this.resultados=resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
      
    } )
    
  }
  
}  
