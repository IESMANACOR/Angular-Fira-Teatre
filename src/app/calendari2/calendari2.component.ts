import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-calendari2',
  templateUrl: './calendari2.component.html',
  styleUrls: ['./calendari2.component.css']
})
export class Calendari2Component implements OnInit {

  constructor(private http:HttpClient) { 
    this.http.get('http://www.f.dawman.info/rest/public/sessio/2').subscribe(result=>{
 
    
      this.fullc(result);
    });
    
    
    
  }
  

  fullc(evento:any){
    $(document).ready(function() {
      var arreglado = evento.map( item => { 
        var a = item.data;
        var b = item.hora;
        var c = " ";
        var url1 ='http://www.f.dawman.info/#/espectacles/detallEspectacle/'+item.codiEspectacle;
        var res = a.concat(c,b);
        return { start: res   , end: item.data , title : item.titol , url : url1}; 
      });
      if( $(window).width() > 1000)
        {
        var lista = "month"
        } else{
          var lista = "listMonth"
        }

      $('#calendar').fullCalendar({
      
        header: {
          left: 'prev,next today',
          center: 'title',
          
          right: false
        },
        firstDay:1,
        editable: false,
        navLinks: false, // can click day/week names to navigate views
        eventLimit: true, // allow "more" link when too many events
        events: arreglado,
        defaultView: lista,
        loading: function(bool) {
          $('#loading').toggle(bool);
        }
      });
   
      $("fc-scroller").css("height","");
      
  
    });
  }
  

  ngOnInit() {
    
  }

}
