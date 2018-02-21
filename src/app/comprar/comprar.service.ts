import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ComprarService {
    constructor(private http: Http, private httpC: HttpClient) { }

    llistaEspectacles() {
        return this.http.get('http://www.f.dawman.info/rest/public/espectacle')
            .toPromise()
            .then(resposta => resposta.json())
            .catch(this.errada)
    }

    llistaAbonaments() {
        return this.http.get('http://www.f.dawman.info/rest/public/abonaments/2')
            .toPromise()
            .then(resposta => resposta.json())
            .catch(this.errada)
    }
    llibre=[{codiEspectacle: 11, codiSessio:19}];

    

   


    private errada(error: any) {
        console.log("Hi ha una errada a la cridada HTTP", error);
        return Promise.reject(error.message || error);
    }


}