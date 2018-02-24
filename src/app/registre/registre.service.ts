import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RegistreService {
constructor(private http:Http, private httpC:HttpClient){}

llistaCiutat(){
return this.http.get('http://www.f.dawman.info/rest/public/ciutat')
.toPromise()
.then(resposta => resposta.json())
.catch(this.errada)
}
llistaPais(){
    return this.http.get('http://www.f.dawman.info/rest/public/pais')
    .toPromise()
    .then(resposta => resposta.json())
    .catch(this.errada)
    }

    



    altaUsuari(user:any) {

      //let producte = JSON.stringify(user);


     // let headers = new HttpHeaders().set('Content-Type','application/json');

     

     return this.http.post('http://www.f.dawman.info/rest/public/persona/insertar', user)
     .subscribe(res => console.log(res));

          
  }

  altaCompra(producte:any) {

   // let producte = JSON.stringify(llibre);


   // let headers = new HttpHeaders().set('Content-Type','application/json');

   return this.http.post('http://www.f.dawman.info/rest/public/compra/insertar', producte)
   .subscribe(res => console.log(res));

        
}
private errada(error:any){
console.log("Hi ha una errada a la cridada HTTP", error);
return Promise.reject(error.message || error);
}
}