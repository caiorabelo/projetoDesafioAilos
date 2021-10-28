import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-titular-cpf',
  templateUrl: './titular-cpf.component.html',
  styleUrls: ['./titular-cpf.component.scss'],
})
export class TitularCpfComponent implements OnInit{
  // RESPONSÁVEL PELA EMISSÃO
  @Output() aoBuscar = new EventEmitter<any>();
  // RECEBER O OBJETO VINDO DA API
  pessoa: any[];
  // RECEBE O COOPERADOR
  cooperador: any;
  // MODEL CPF
  cpf: string;

  // INJEÇÃO DE DEPENDÊNCIA DO HTTPCLIENT
  constructor(http: HttpClient) {
    // FAZ A PESQUISA DA PESSOA ATRAVÉS DA API E ATRIBUI O VALOR
    const observable = http
      .get<any[]>('http://localhost:3000/transferencias')
      .subscribe(pessoa =>{
        this.pessoa = pessoa;
      });
  }

  ngOnInit(){
    this.pessoa = [];
    this.cooperador='';
    this.cpf='';
  }

  // BUSCA O COOPERADOR NO ARRAY DE ACORDO COM O CPF DIGITADO
  buscar() {
    for (let x in this.pessoa) {
      // VERIFICA O CPF COM A POSIÇAO ATUAL DO ARRAY
        if(this.cpf==this.pessoa[x].cpf){
          // FAZ A EMISSÃO
          this.aoBuscar.emit(this.cooperador=this.pessoa[x]);
          // FORÇA O TERMINO DO LOOP
          break;
        }
      }
      // VERIFICA SE ALGUM COOPERADOR FOI ENCONTRADO
      if(this.cooperador!=''){
        this.cooperador=false;
      }else{
        // FAZ A EMISSÃO, COOPERADOR NÃO ENCONTRADO
        this.aoBuscar.emit(this.cooperador=false);
      }
  }
}
