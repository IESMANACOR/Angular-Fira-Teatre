import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormulariService } from './formulari.service';
import { FormsModule , FormGroup , FormControl,ReactiveFormsModule, Validators  } from '@angular/forms'

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  formulari:FormGroup;

  constructor(private service: FormulariService) { 
    this.formulari=new FormGroup({
      nom:new FormControl("", [Validators.required,Validators.maxLength(45)]),
      email:new FormControl("", [Validators.required, Validators.email]),
      tema:new FormControl("", [Validators.required]),
      missatge:new FormControl("", [Validators.required])
        
      });
  }

  enviarFormulari(){

    console.log(this.formulari.value);

this.service.enviarDubte(this.formulari.value);

  }

  ngOnInit() {
  }

}