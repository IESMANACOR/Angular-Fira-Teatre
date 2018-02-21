import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class RegistreService {
constructor(private http:Http){}

llistaCiutat(){
return this.http.get('https://api.myjson.com/bins/o4vox')
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
  /*  llistaTipus(){
        return this.http.get('https://api.myjson.com/bins/10dqu1')
        .toPromise()
        .then(resposta => resposta.json())
        .catch(this.errada)
        }*/
private errada(error:any){
console.log("Hi ha una errada a la cridada HTTP", error);
return Promise.reject(error.message || error);
}
}