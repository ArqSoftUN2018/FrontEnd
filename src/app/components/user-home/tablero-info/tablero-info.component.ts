import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tablero-info',
  templateUrl: './tablero-info.component.html',
  styleUrls: ['./tablero-info.component.css']
})
export class TableroInfoComponent implements OnInit {

  @Input() tablero:any;

  constructor() { }

  ngOnInit() {
  }

}
