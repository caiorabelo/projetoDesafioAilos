// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//IMPORT NGX-MASK
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

// PRÓPRIOS
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { TitularCpfComponent } from "./titular-cpf/titular-cpf.component";
import { CartaoComponent } from "./cartao/cartao.component";


@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    MenuInferiorComponent,
    ProgressoComponent,
    TitularCpfComponent,
    CartaoComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
