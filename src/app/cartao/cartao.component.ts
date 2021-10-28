import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss'],
})
export class CartaoComponent implements OnInit{
  // RECEBE O COOPERADOR
  @Input() cooperador: any;
  // ATIVA OU DESATIVA MENSAGEM DE COOPERADOR NÃO ENCONTRADO
  @Input() ativo: boolean;

  constructor(){}

  ngOnInit(){
    this.cooperador = '';
    this.ativo = false;
  }
}
