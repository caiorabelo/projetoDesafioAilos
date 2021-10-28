import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  // PARA RECEBER UM COOPERADOR
  cooperador: any;
  // PARA MOSTRAR A MENSAGEM DE COOPERADOR NÃO ENCONTRADO
  ativo: boolean;

  constructor(){}

  ngOnInit(){
    this.cooperador ='';
  }

  // MÉTODO QUE RECEBE UM COOPERADOR EMITIDO
  recebeCooperador($event) {
    // SETA O EVENTO
    this.cooperador = $event;
    // VERIFICA A EXISTÊNCIA DO COOPERADOR
    if ($event == false) {
      this.ativo = true;
    }else{
      this.ativo = false;
    }
  }
}
