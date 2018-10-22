import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarea-info',
  templateUrl: './tarea-info.component.html',
  styleUrls: ['./tarea-info.component.css']
})
export class TareaInfoComponent implements OnInit {

  @Input() tarea:any;
  @Input() complete: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
