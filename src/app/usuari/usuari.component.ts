import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-usuari',
  templateUrl: './usuari.component.html',
  styleUrls: ['./usuari.component.css']
})
export class UsuariComponent implements OnInit {
  usuario:any;
  constructor() { 
    
  }

  ngOnInit() {
    this.usuario = (localStorage.getItem('usuario') != undefined)?JSON.parse(localStorage.getItem('usuario')):null;
  }

}
