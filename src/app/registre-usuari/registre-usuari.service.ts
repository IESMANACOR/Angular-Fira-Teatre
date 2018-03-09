import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RegistreUsuariService {
constructor(private http:Http){}





    altaUsuari(usuari:any) {

     return this.http.post('http://www.f.dawman.info/rest/public/persona/insertar', usuari)
     .subscribe(res => console.log(res));

          
  }


private errada(error:any){
console.log("Hi ha una errada a la cridada HTTP", error);
return Promise.reject(error.message || error);
}
}