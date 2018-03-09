import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class DetallService {
  constructor(private http: Http) { }

  detallEspectacle(id) {
    return this.http.get('http://www.f.dawman.info/rest/public/espectacle/1/'+ id)
      .toPromise()
      .then(resposta => resposta.json())
      .catch(this.errada)
  }
  private errada(error: any) {
    console.log("Hi ha una errada a la cridada HTTP", error);
    return Promise.reject(error.message || error);
  }

  altaComentari(user:any) {


   return this.http.post('http://www.f.dawman.info/rest/public/espectacle/comentar/', user)
   .subscribe(res => console.log(res));


}



}
