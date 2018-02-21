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
    this.http.get('http://www.f.dawman.info/rest/public/sessio/1').subscribe(result=>{
 
    
      this.fullc(result);
    });
    
    
    
  }

  fullc(evento:any){
    $(document).ready(function() {
      var arreglado = evento.map( item => { 
        var a = item.data;
        var b = item.hora;
        var c = " ";
        var res = a.concat(c,b);
        return { start: res   , end: item.data , title : item.titol }; 
      });
      

      $('#calendar').fullCalendar({
      
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,listMonth'
        },
        firstDay:1,
        editable: false,
        navLinks: true, // can click day/week names to navigate views
        eventLimit: true, // allow "more" link when too many events
        events: arreglado,
        
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
