import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService:LoginService, private router:Router){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        if(event.urlAfterRedirects == "/"){        
          this.redirigir();
        } 
      }
    );
  }

  OnInit(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        if(event.urlAfterRedirects == "/"){        
          this.redirigir();
        } 
      }
    );
  }

  public redirigir(){
    console.log("asdasd")
    if(this.loginService.isLogged()){
      this.router.navigateByUrl('home');
    }
  }
}
