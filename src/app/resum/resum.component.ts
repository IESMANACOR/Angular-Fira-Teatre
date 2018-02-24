import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'


@Component({
  selector: 'app-resum',
  templateUrl: './resum.component.html',
  styleUrls: ['./resum.component.css']
})
export class ResumComponent implements OnInit {

  constructor(private http: Http) { }

  carrito=[];

  preu:number=0;

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

  ngOnInit() {

    this.imprimir();
    console.log(this.carrito);
    localStorage.clear();
  }

}
