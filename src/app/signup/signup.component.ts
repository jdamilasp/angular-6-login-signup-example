import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  singupForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.singupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

    // convenience getter for easy access to form fields
  get f() { return this.singupForm.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.singupForm.invalid){
      return;
    }

    this.loading = true;

    // This is TODO : Code 
    setTimeout( () => {
      this.router.navigate(["/login"])
    },3000)

  }

}