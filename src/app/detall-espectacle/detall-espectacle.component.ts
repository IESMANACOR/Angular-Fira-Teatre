import { Component, OnInit } from '@angular/core';
import { DetallService } from './detall-espectacle.service';
import { ActivatedRoute } from '@angular/router';


declare var jquery : any;
declare var $ : any;

@Component({
  selector: 'app-detall-espectacle',
  templateUrl: './detall-espectacle.component.html',
  styleUrls: ['./detall-espectacle.component.css']
})
export class DetallEspectacleComponent implements OnInit {

  id: any;

  constructor(private espectacle: DetallService, private prova: ActivatedRoute) { }

  detallEspectacle;

  llistaEspectacle(id) {
    this.espectacle
      .detallEspectacle(id)
      .then(result => this.detallEspectacle = result)
      .catch(error => console.log(error));


  }

  ngOnInit() {
    console.log(this.id);
    this.id = +this.prova.snapshot.paramMap.get('id');
    this.llistaEspectacle(this.id);

    $(document).ready(function(){

      $("#obri").hide();

      $("#clicka").click(function() {
        $("#obri").toggle("slow", function() {
          // Animation complete.
        });
      });
    });
  }




}
