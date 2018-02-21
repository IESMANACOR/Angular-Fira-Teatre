import { Component, OnInit } from '@angular/core';
import { RegistreService } from './registre.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  constructor(private service: RegistreService) { }

  ciutats;
  paisos;

  llistaCiutats() {

    this.service
      .llistaCiutat()
      .then(result => this.ciutats = result)
      .catch(error => console.log(error));


  }

  llistaPais() {

    this.service
      .llistaPais()
      .then(result => this.paisos = result)
      .catch(error => console.log(error));


  }

  ngOnInit() {

    this.llistaCiutats();
    this.llistaPais();

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
