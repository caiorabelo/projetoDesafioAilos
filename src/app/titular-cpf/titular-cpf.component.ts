import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-titular-cpf',
  templateUrl: './titular-cpf.component.html',
  styleUrls: ['./titular-cpf.component.scss'],
})
export class TitularCpfComponent implements OnInit{
  @Output() aoBuscar = new EventEmitter<any>();
  pessoa: any[] = [];
  cooperador: any='';
  cpf: string= '';

  constructor(http: HttpClient) {
    const observable = http
      .get<any[]>('http://localhost:3000/transferencias')
      .subscribe(pessoa =>{
        this.pessoa = pessoa;
      });
  }

  ngOnInit(){

  }

  buscar() {
    for (let x in this.pessoa) {
        if(this.cpf==this.pessoa[x].cpf){
          this.aoBuscar.emit(this.cooperador=this.pessoa[x]);
          break;
        }
      }
      if(this.cooperador!=''){
        this.cooperador=false;
      }else{
        this.aoBuscar.emit(this.cooperador=false);
      }
  }
}
