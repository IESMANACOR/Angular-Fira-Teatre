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
          
          if (s > 70 ) {
             $('.headnav').addClass('scrolled fade');
             
         
         }
    
          if (s <= 19 ) {
            $('.headnav').removeClass('scrolled fade');
            
           
          }    
         
        });
    
   
    });
  }

  quantitat:number=0;

  contarEntrada(){
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);

      if(key=="entrada"+i){
      let value = JSON.parse(localStorage.getItem(key));

      this.quantitat++;
      }
    }
  }

  ngOnInit() {

    this.contarEntrada();
  
  }

}
