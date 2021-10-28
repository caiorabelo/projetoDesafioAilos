import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  cooperador: any = '';
  passarCpf($event) {
    this.cooperador = $event;
    if ($event == false) {
      alert("CPF Inválido");
      console.log("CPF Inválido");
    } else {
      console.log(this.cooperador);
    }
  }
}
