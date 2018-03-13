import { Component, OnInit } from '@angular/core';
import { DetallService } from './detall-espectacle.service';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-detall-espectacle',
  templateUrl: './detall-espectacle.component.html',
  styleUrls: ['./detall-espectacle.component.css']
})
export class DetallEspectacleComponent implements OnInit {

  id: any;
  formulari: FormGroup;

  constructor(private espectacle: DetallService, private prova: ActivatedRoute, private router: Router) {
    this.formulari = new FormGroup({
      usuari: new FormControl("", [Validators.required]),
      comentari: new FormControl("", [Validators.required]),
      codiEspectacle: new FormControl("", [])
    });

  }

  detallEspectacle;

  llistaEspectacle(id) {
    this.espectacle
      .detallEspectacle(id)
      .then(result => this.detallEspectacle = result)
      .catch(error => console.log(error));


  }


  enviarFormulari() {

    console.log(this.formulari);
    this.espectacle.altaComentari(this.formulari);
    window.location.reload();

  }




  ngOnInit() {
    this.id = +this.prova.snapshot.paramMap.get('id');
    //console.log(this.id);
    this.llistaEspectacle(this.id);

    $(document).ready(function() {

      $("#anonymous").change(function() {

        if ($('#anonymous').prop('checked')) {
          $("#inputAnonim").val("anonymous");
          $("#inputAnonim").prop('readonly', true);
        } else {
          $("#inputAnonim").val("");
          $("#inputAnonim").prop('readonly', false);

        }
      });


      $('.ancla').click(function() {
        var link = $(this);
        var anchor = link.attr('href');
        $('html, body').stop().animate({
          scrollTop: jquery(anchor).offset().top
        }, 2000);
        return false;
      });


      $("#comentaris").hide();

      $("#insert-comentaris").click( function() {
        $("#comentaris").toggle();
      });

    });
  }

  postProfile(sessio) {


    let myObj = { espectacle: sessio.codiEspectacle, sessio: sessio.codi };
    let stl = localStorage.length;
    localStorage.setItem("entrada" + stl, JSON.stringify(myObj));


    //
    //this.imprimir();
    //this.router.navigate(['carret']);
  }




}
