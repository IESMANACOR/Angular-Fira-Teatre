import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import { FormsModule , FormGroup , FormControl,ReactiveFormsModule, Validators  } from '@angular/forms'
import { RegistreUsuariService } from './registre-usuari.service'

@Component({
  selector: 'app-registre-usuari',
  templateUrl: './registre-usuari.component.html',
  styleUrls: ['./registre-usuari.component.css']
})
export class RegistreUsuariComponent implements OnInit {

  ciudades:any;
 formulari:FormGroup;
  constructor(private http: Http, private service: RegistreUsuariService) {
    this.formulari=new FormGroup({
      nom:new FormControl("", [Validators.required,Validators.maxLength(45)]),
      llinatge1:new FormControl("", [Validators.required]),
      llinatge2:new FormControl("", [Validators.required]),
      dni:new FormControl("", [Validators.required,Validators.maxLength(9)]),
      email:new FormControl("", [Validators.required]),
      password:new FormControl("", [Validators.required]),
      adreça:new FormControl("", [Validators.required]),
      ciutat:new FormControl("", [Validators.required]),
      tel:new FormControl("", []),
        
      });
    this.http.get('http://www.f.dawman.info/rest/public/ciutat')
    .toPromise()
    .then(respuesta=> this.ciudades = respuesta.json());
   }

insertUsuari(){

  this.service.altaUsuari(this.formulari.value);

  console.log(this.formulari.value);



}



  ngOnInit() {
  }

}
