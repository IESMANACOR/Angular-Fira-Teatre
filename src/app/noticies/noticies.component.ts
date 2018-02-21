import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-noticies',
  templateUrl: './noticies.component.html',
  styleUrls: ['./noticies.component.css']
})
export class NoticiesComponent implements OnInit {

  constructor() { 
    
    

    var yql = encodeURIComponent("select * from xml where url='http://www.diariodemallorca.es/elementosInt/rss/50'");
    
    
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q="+yql+"&format=json&callback=?", function(data) {
      var items = data.query.results.rss.channel.item;
      items.length = 2;
      var html_segment = "";
     
      $.each(items, function(i, item) {
          html_segment = html_segment + "<div  class='col-12 col-md-6 mb-4 '>";
          html_segment = html_segment + "<h4 >"+item.title+"</h4>";
          html_segment = html_segment + "<span>-"+item.pubDate+"</span>";
          html_segment = html_segment + "<p class='desc well '>"+item.description+"</p>"
          html_segment = html_segment + "<a href="+item.link+" target='_blank'>Leer mas</a>";
          html_segment = html_segment + "</div>" ;
         
      } );
      
      $("#food-recalls").append(html_segment);
    });
    
    
      }
    
      ngOnInit() {
      }

}
