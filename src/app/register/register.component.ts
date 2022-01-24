import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm?: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      phone: new FormControl(''),
      jobType: new FormControl(''),
      password: new FormControl(''),
      rePassword: new FormControl(''),
    })
  }

  register() {
    console.log(this.registerForm?.value)
  }

  get fullName() {
    return this.registerForm?.get('fullName')
  }

  get email() {
    return this.registerForm?.get('email')
  }

}
