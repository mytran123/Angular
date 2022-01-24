import { Component, OnInit } from '@angular/core';
import {Login} from "./login";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // login = new Login('','')

  loginForm?: FormGroup

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  // submit() {
  //   console.log(this.login);
  // }

  get email() {
    return this.loginForm?.get('email')
  }

  get password() {
    return this.loginForm?.get('password')
  }

  loginSubmit() {
    let email = this.loginForm?.value.email
    let password = this.loginForm?.value.password
    let users = this.userService.getAll()
    for (const user of users) {
      if (user.email == email && user.password == password) {
        localStorage.setItem('isLogin',String(true));
        this.router.navigate(['admin/users'])
      }
    }
  }

}
