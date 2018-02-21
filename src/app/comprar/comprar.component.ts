import { Component, OnInit } from '@angular/core';
import { ComprarService } from './comprar.service';
import { NgForm,FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';


declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor(private service: ComprarService, private httpC: HttpClient,private router: Router) { 

    this.formulari=new FormGroup({
      espectacle:new FormControl(""),
      sessio:new FormControl("")
    });
    
  }

  
  formulari:FormGroup;
  espectacles;
  abonaments;

  imprimir(){
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let value = JSON.parse(localStorage.getItem(key));
      console.log(key, value);
    }
  }

  postProfile(){

console.log(this.formulari.value.espectacle);
//localStorage.clear();
//localStorage.removeItem('entrada1');
let myObj = { espectacle: this.formulari.value.espectacle, sessio: this.formulari.value.sessio };
let stl=localStorage.length;
localStorage.setItem("entrada"+stl, JSON.stringify(myObj));

//this.imprimir();
this.router.navigate(['carret']);
    }
  

  llistaEspectacles() {

    this.service
      .llistaEspectacles()
      .then(result => this.espectacles = result)
      .catch(error => console.log(error));


  }

  llistaAbonaments() {

    this.service
      .llistaAbonaments()
      .then(resultat => this.abonaments=resultat)
      .catch(error => console.log(error));


  }

 

  

  ngOnInit() {

    this.llistaEspectacles();
    this.llistaAbonaments();

    $(document).ready(function () {

      $("#ent").hide();
      $("#abo").hide();
      $("#espectacle").change(function () {
        var es = $("#espectacle").val();
        var idioma = 2;

        //alert(es);

        $(".ob").remove();

        $.getJSON("http://www.f.dawman.info/rest/public/sessio/"+idioma+"/"+es, function (result) {

          $.each(result, function (i, field) {

            //alert(field.titol);

            $("#select-entrades").append(" <option class='ob' value='"+field.codi+"'>"+field.data+"  | Hora: "+field.hora+"  | Preu:"+field.preu+"€  | Sala: "+field.nom+"</option>");

          });
        });

        $("#select-entrades").append("<option class='ob' selected='true' disabled='disabled'>Sessio</option> ");

      });
    });

    $("#entrada").click(function(){

      $("#ent").toggle();
      $("#abo").hide();
      
  });

  $("#abonament").click(function(){

    $(".ob").remove();
    $("#abo").toggle();
    $("#ent").hide();
    
});


$("#abono").change(function () {

  var entrades=$("#abono").val();

  $(".ses-abo").empty();

  var a = parseInt(entrades);

  var x=0;

  while(x<a){

    $(".ses-abo").append("<div class='form-group'><label for='abo"+x+"'>Example select</label><select class='form-control aves' id='abo"+x+"'></select></div>");

   x++;}
    $.getJSON("http://www.f.dawman.info/rest/public/espectacle", function (result) {

          $.each(result, function (i, field) {

            

            $(".aves").append("<option>"+field.titol[1].titol+"</option>");

            //$('.aves').append("hola");

          });
        });
      


});

$(".aves").change(function () {
  var es = $(this).val();
  var idioma = 2;

  //alert(es);

  // $(".ses-abo").empty();

  // $.getJSON("http://www.f.dawman.info/rest/public/sessio/"+idioma+"/"+es, function (result) {

  //   $.each(result, function (i, field) {

  //     //alert(field.titol);

  //     $(".ses-abo").append(" <div class='ob pl-5'><label class='form-check-label'><input type='radio' class='form-check-input' name='optionsRadios' id='optionsRadios1' value='option1'>Dia: "+field.data+"  | Hora: "+field.hora+"  | Preu:"+field.preu+"€  | Sala: "+field.nom+"</label>");

  //   });
  // });


});


  }

}
