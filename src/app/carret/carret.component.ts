import { Component, OnInit } from '@angular/core';
import { CarretService } from './carret.service';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { HttpClient} from '@angular/common/http';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-carret',
  templateUrl: './carret.component.html',
  styleUrls: ['./carret.component.css']
})
export class CarretComponent implements OnInit {

  constructor(private service: CarretService,private http: Http, private httpC: HttpClient) { }

 carrito=[];

  preu:number=0;


  llistarCoses() {
    return this.http.get('http://www.f.dawman.info/rest/public/cart/index')
        .toPromise()
        .then(resposta => resposta.json())
        .catch(this.errada)
}

llistarCarrito() {

  this.llistarCoses()
    .then(result =>  console.log(result))
    .catch(error => console.log(error));

}

getCarrito(){
  this.httpC.get(`http://www.f.dawman.info/rest/public/cart`)
  .subscribe(
  (data:any[])=>{console.log(data)});
  }

  

  descripcionModelo(){
  this.service.carrito()
  .then(result => console.log(result))
  .catch(error => console.log(error))
  }







  imprimir(){
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);

      if(key=="entrada"+i){
      let value = JSON.parse(localStorage.getItem(key));
      //console.log(key, value);

      this.llistarC(value.espectacle, value.sessio);
      this.contarPreu(value.espectacle, value.sessio);

      }
    }

   // console.log(this.carrito);
  }

  llistarCarret(espectacle, sessio) {
    return this.http.get('http://www.f.dawman.info/rest/public/sessio/2/'+espectacle+"/"+sessio)
        .toPromise()
        .then(resposta => resposta.json())
        .catch(this.errada)
}


llistarC(espectacle, sessio) {

  
  
  this.llistarCarret(espectacle, sessio)
    .then(result =>  this.carrito.push(result[0]))
    .catch(error => console.log(error));


}

contarPreu(espectacle, sessio) {

  
  
  this.llistarCarret(espectacle, sessio)
    .then(result =>  this.preu+=result[0].preu)
    .catch(error => console.log(error));


}

private errada(error: any) {
  console.log("Hi ha una errada a la cridada HTTP", error);
  return Promise.reject(error.message || error);
}

buidarCarret(){
  localStorage.clear();
  window.location.reload();
}



  ngOnInit() {
   // localStorage.removeItem('entrada2');
      this.imprimir();

      this.llistarCarrito();
      this.getCarrito();
      this.descripcionModelo();

   
  }

}
