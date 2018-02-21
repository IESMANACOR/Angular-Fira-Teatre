import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  providers: [NgbAccordionConfig]
})
export class FaqComponent implements OnInit {

  constructor(config: NgbAccordionConfig) { 
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {
  }

}
