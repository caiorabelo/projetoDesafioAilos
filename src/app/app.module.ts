import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { TitularCpfComponent } from "./titular-cpf/titular-cpf.component";
import { CardItemComponent } from "./card-item/card-item.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    MenuInferiorComponent,
    ProgressoComponent,
    TitularCpfComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
