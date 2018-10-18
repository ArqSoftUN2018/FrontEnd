import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  public login(user){
    if(user.correo=="bryam"&&user.pass=="pass"){
      const token = "token";
      
      localStorage.setItem('jwt', token)
      this.router.navigateByUrl('/Home');
    }else{
      alert("el usuario o la contraseña son incorrectos");
    }
  }

  public isLogged(){
    if(localStorage.getItem('jwt')){
      return true;
    }else{
      return false;
    }
  }
  public cerrarSesion(){
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('');
  }
}
