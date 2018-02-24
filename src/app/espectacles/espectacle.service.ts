import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class EspectacleService {
constructor(private http:Http){}

llistaEspectacles(){
return this.http.get('http://www.f.dawman.info/rest/public/espectacle')
.toPromise()
.then(resposta => resposta.json())
.catch(this.errada)
}
llistaGeneres(){
    return this.http.get('http://www.f.dawman.info/rest/public/genere')
    .toPromise()
    .then(resposta => resposta.json())
    .catch(this.errada)
    }
    llistaTipus(){
        return this.http.get('http://www.f.dawman.info/rest/public/tipus')
        .toPromise()
        .then(resposta => resposta.json())
        .catch(this.errada)
        }
private errada(error:any){
console.log("Hi ha una errada a la cridada HTTP", error);
return Promise.reject(error.message || error);
}

}

//generes https://api.myjson.com/bins/n82d5
//tipus https://api.myjson.com/bins/10dqu1