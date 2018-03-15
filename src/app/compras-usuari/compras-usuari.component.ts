import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
@Component({
  selector: 'app-compras-usuari',
  templateUrl: './compras-usuari.component.html',
  styleUrls: ['./compras-usuari.component.css']
})
export class ComprasUsuariComponent implements OnInit {

 
  compra:any;
  constructor(private http: Http) {
    
    this.http.get('/compra')
    .toPromise()
    .then(respuesta=> this.compra = respuesta.json());
   }

    

  ngOnInit() {
  }

}
