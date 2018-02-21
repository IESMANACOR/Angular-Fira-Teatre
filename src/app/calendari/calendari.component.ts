import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-calendari',
  templateUrl: './calendari.component.html',
  styleUrls: ['./calendari.component.css']
})
export class CalendariComponent implements OnInit {

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
        var url1 ="yeeeeeeeeeeeeeeee"
        var res = a.concat(c,b);
        return { start: res   , end: item.data , title : item.titol , url: url1}; 
      });
      

      $('#calendar').fullCalendar({
        firstDay:1,
        header: {
          left: 'prev,next today',
          right: 'list'
        },
  
        defaultDate: '2018-02-12',

        defaultView: 'listWeek',

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
