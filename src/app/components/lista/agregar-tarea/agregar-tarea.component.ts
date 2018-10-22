import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {

  @Input() lista:any;

  private tarea:any = { 
    
  }

  constructor() { }

  ngOnInit() {
  }

}
