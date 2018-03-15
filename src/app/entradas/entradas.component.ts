import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
 elementType : 'url' | 'canvas' | 'img' = 'url' ;
 entrada:any;
  constructor(private http: Http) {
     
 this.http.get('/entrada')
    .toPromise()
    .then(respuesta=> this.entrada = respuesta.json());
    
   }

    
   
  ngOnInit() {
  }

}
