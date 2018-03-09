import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class FormulariService {
constructor(private http:Http){}





    enviarDubte(tema:any) {

     return this.http.post('http://www.f.dawman.info/rest/public/problema/enviar', tema)
     .subscribe(res => console.log(res));

          
  }


private errada(error:any){
console.log("Hi ha una errada a la cridada HTTP", error);
return Promise.reject(error.message || error);
}
}