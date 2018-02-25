import { Component, OnInit } from '@angular/core';
import { RegistreService } from './registre.service';
import { NgForm,FormControl,FormGroup,Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';



declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  formulari:FormGroup;


  constructor(private service: RegistreService,private router: Router) { 
    this.formulari=new FormGroup({
      nom:new FormControl("",[Validators.required]),
      llinatge1:new FormControl("",[Validators.required]),
      llinatge2:new FormControl("",[Validators.required]),
      adreça:new FormControl("",[Validators.required]),
      pais:new FormControl("",[Validators.required]),
      comunitat:new FormControl("",[Validators.required]),
      ciutat:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required]),
      dni:new FormControl("",[Validators.required]),
    });
   }

  ciutats;
  paisos;

  enviarFormulari(){
    //console.log(JSON.stringify(this.formulari.value));

    this.service.altaUsuari(this.formulari.value);
    this.imprimir();
    //console.log("enviat");
    //localStorage.clear();
    
    this.router.navigate(['carret/registre/resum']);

  }

  entrades=[];

  imprimir(){
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);

      if(key=="entrada"+i){
      let value = JSON.parse(localStorage.getItem(key));
      let myObj = { espectacle: value.espectacle, sessio: value.sessio }

        this.entrades.push(myObj);

      }
    }

    let obj = {dni: this.formulari.value.dni, correu: this.formulari.value.email}

    this.entrades.push(obj);

    this.service.altaCompra(this.entrades);

    //console.log(this.entrades);
  }





  llistaPais() {

    this.service
      .llistaPais()
      .then(result => this.paisos = result)
      .catch(error => console.log(error));


  }

  ngOnInit() {

    
    this.llistaPais();

    

   // this.service.altaUsuari();

    $(document).ready(function () {


      $("#pais").change(function () {
        var num = $("#pais").val();

        //alert(num);
        $("#comunitat").find('option').remove();
        $("#ciutat").find('option').remove();

        $("#ciutat").append("<option selected='true' disabled='disabled'>City</option>");
        $("#comunitat").append("<option selected='true' disabled='disabled'>Comunitat</option>");




        $.getJSON("http://www.f.dawman.info/rest/public/pais/" + num, function (result) {


          $.each(result.comunitat, function (i, field) {

            //alert(field.nom);


            $("#comunitat").append("<option value='" + field.codi + "'>" + field.nom + "</option> ");
          });
        });


      });
      $("#comunitat").change(function () {
        var nom = $("#comunitat").val();

        //alert(nom);
        $("#ciutat").find('option').remove();
        $("#ciutat").append("<option selected='true' disabled='disabled'>City</option>");


        $.getJSON("http://www.f.dawman.info/rest/public/comunitat/" + nom, function (result) {


          $.each(result.ciutat, function (i, field) {

            //alert(field.nom);


            $("#ciutat").append("<option value='" + field.codi + "'>" + field.nom + "</option> ");
          });
        });


      });

    });
  }

}
