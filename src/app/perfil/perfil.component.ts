import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
 import { HttpClient, HttpHeaders} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario:any;
  constructor(private http : HttpClient) { }

  login(a:any){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(a.value);
    this.http.post("/login", body, { headers }).subscribe(function(data){
      localStorage.setItem('usuario',JSON.stringify(data));
      location.reload();
    });

  }

  recuperar(a:any){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(a.value);
    this.http.post("/mail", body, { headers }).subscribe(function(data){
      
      
    });

  }

  logout(){
    this.http.get("/logout").subscribe(function(data){
      localStorage.removeItem('usuario');
      location.reload();
    });
  }
  
  ngOnInit() {
    this.usuario = (localStorage.getItem('usuario') != undefined)?JSON.parse(localStorage.getItem('usuario')):null;


  }

}
