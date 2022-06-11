import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { AsesinosComponent } from './asesinos/asesinos.component';
import { SurvivorComponent } from './survivors/survivor.component';
import { Error404Component } from './Error/error.component';
import { MapaComponent } from './mapas/mapa.component';
import { SingleAsesino } from './asesinos/asesino/asesinopage.component';
import { apirestComponent } from "./apirest/apirest.component";

const appRoutes:Routes =[
        {path:'', component:AsesinosComponent},
        {path:'survivors', component:SurvivorComponent},
        {path:'mapas',component:MapaComponent },
        {path:'asesinos', component:AsesinosComponent},
        {path:'asesinos/:nombre', component:SingleAsesino},
        {path:'api', component:apirestComponent},
        //{path}    
        {path:'**', component: Error404Component},
];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);