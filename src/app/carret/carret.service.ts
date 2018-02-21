import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class CarretService {
    constructor(private http: Http) { }

    llistaEspectacles() {
        return this.http.get('http://www.f.dawman.info/rest/public/cart')
            .toPromise()
            .then(resposta => resposta.json())
            .catch(this.errada)
    }

    carrito() {
        return this.http.get('http://www.f.dawman.info/rest/public/cart/index')
        .toPromise()
        .then(resposta => resposta.json())
        .catch(this.errada)
        }
                
    


    private errada(error: any) {
        console.log("Hi ha una errada a la cridada HTTP", error);
        return Promise.reject(error.message || error);
    }

    


}