import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
