import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-inferior',
  templateUrl: './menu-inferior.component.html',
  styleUrls: ['./menu-inferior.component.scss']
})
export class MenuInferiorComponent implements OnInit {
  // RECEBE O COOPERADOR
  @Input() cooperador: any;

  constructor() { }
  ngOnInit() {
    this.cooperador = '';
  }
}
