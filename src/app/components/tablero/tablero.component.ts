import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  private equipo:any = {
    id: Number,
    grupo: <any>[],
  } 

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.obtenerTableroParam();
  }
  private obtenerTableroParam(){
    var equipo_param = this.route.params
      .subscribe(params => {
        this.equipo.id = Number(params['id']);
        console.log(this.equipo)
      },
       (error)=>{
         alert('Ups!, No se pudieron obtener los equipos, Por favor Intente mas tarde')
         console.error(error)

      });
  }

}
