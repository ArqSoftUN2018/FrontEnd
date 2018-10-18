import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  private tableros: Array<any> = [];
  private tareas: Array<any> = [];
  
  constructor() { }

  ngOnInit() {
    this.obtenerTableros();
    this.obtenerTareas();
  }

  private obtenerTableros(){
    
  }

  private obtenerTareas(){

  }
}
