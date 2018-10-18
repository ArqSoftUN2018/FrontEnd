import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  public user: any = {
    nombre:"",
    correo:"",
    pass:"",
    pass_confirmation:""
  }

  constructor() { }

  ngOnInit() {
  }

  public singup(){
    if(this.user.pass==this.user.pass_confirmation){

    }
  }

}
