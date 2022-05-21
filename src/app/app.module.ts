import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importar el routing
import { routing, appRoutingProviders } from './app.routing';

//componentes
import { AsesinosComponent } from './asesinos/asesinos.component';
import { SurvivorComponent } from './survivors/survivor.component';
import { Error404Component } from './Error/error.component';
import { MapaComponent } from './mapas/mapa.component';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AsesinosComponent,
    SurvivorComponent,
    Error404Component,
    MapaComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    //routing del archivo app.routing.ts
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
