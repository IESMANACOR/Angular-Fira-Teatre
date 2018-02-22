import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class RegistreService {
constructor(private http:Http){}

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

    
 llibre={nom:'Mateu', llinatge1: 'Monserrat',dni:'1234AAA'};


    altaUsuari() {
      return this.http.post('http://192.168.10.10/api/v1/persona/insert', JSON.stringify(this.llibre))
          .map(resposta => resposta.json())
          .catch(this.errada);

          
  }
private errada(error:any){
console.log("Hi ha una errada a la cridada HTTP", error);
return Promise.reject(error.message || error);
}
}