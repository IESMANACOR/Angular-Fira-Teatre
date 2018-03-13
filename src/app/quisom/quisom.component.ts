import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-quisom',
  templateUrl: './quisom.component.html',
  styleUrls: ['./quisom.component.css']
})
export class QuisomComponent implements OnInit {

  sala:any;
  constructor(private http: Http) {
    this.http.get('http://www.f.dawman.info/rest/public/sala')
    .toPromise()
    .then(respuesta=> this.sala = respuesta.json());
   }

  ngOnInit() {
  }

}
