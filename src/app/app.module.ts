import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { PiepaginaComponent } from './componentes/piepagina/piepagina.component';
import { BarraNavComponent } from './componentes/barra-nav/barra-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PiepaginaComponent,
    BarraNavComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
