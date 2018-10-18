import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {
    correo:"",
    pass:""
  }

  constructor(private router:Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  public ingresar(){
    this.loginService.login(this.user);
  }
  
}
