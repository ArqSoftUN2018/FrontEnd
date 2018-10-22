import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() lista_id:any;
  private lista:any = {
    nombre: "a huevo",
    archivada: false
  }
  constructor() { }

  ngOnInit() {
  }

  public mostrarTarea(tarea){
    console.log(tarea);
  }
}
