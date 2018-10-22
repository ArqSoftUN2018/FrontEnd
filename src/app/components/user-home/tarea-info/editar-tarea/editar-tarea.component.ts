import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {

  @Input() tarea:any = { 
    
  }

  constructor() { }

  ngOnInit() {
  }

  public guardar(){
    
  }

}
