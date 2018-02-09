import { Component, OnInit } from '@angular/core';
  declare var jquery:any;
  declare var $ :any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
  
      
       
    
      $(window).scroll(function(){
        
        // Hide or show the progress bar
        
        
         // Get the window position and set it to a variale
          var s = $(window).scrollTop();
         var d = $(document).height();
         var c = $(window).height();
         var scrollPercent = (s / (d-c)) * 100;
    
          // Bind the window position to the progress dial
          $('.dial').val(scrollPercent).change();
          
          if (s > 80 ) {
             $('.header').addClass('scrolled fade');
             $('.logo').addClass('scrolled fade');
             $('.h').removeClass('col-2');
         }
    
          if (s <= 80 ) {
            $('.header').removeClass('scrolled fade');
            $('.logo').removeClass('scrolled fade');
            $('.headertop').removeClass('fade1');
            $('.h').addClass('col-2');
          }    
         
        });
    
   
    });
    
   }

  ngOnInit() {
  }

}
