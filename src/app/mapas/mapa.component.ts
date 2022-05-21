import { Component } from "@angular/core";
import {Mapa} from './mapa';

@Component({
    selector:'mapa',
    templateUrl:'./mapa.component.html'
})

export class MapaComponent {
    public listado_mapas:Array<Mapa>;
    
    constructor(){
        this.listado_mapas = [
            new Mapa ('Planta Procesadora de Carne Gideon', 'Interior', 16 , false, true),
            new Mapa ('Haddonfield', 'Exterior', 20 , false, true),
            new Mapa ('Granja Coldwind', 'Exterior', 16 , true, true),
            new Mapa ('Ormond', 'Exterior', 20, true, true),
        ]
    }

    MostrarMapasVar(valor:string){
        if(valor=='dia'){
            for(var i = 0; i<this.listado_mapas.length ; i++){
                if(this.listado_mapas[i].dia == true){
                    this.listado_mapas[i].visible = true;
                }else{
                    this.listado_mapas[i].visible = false;
                }
            }
        }
        if(valor=='noche'){
            for(var i = 0; i<this.listado_mapas.length ; i++){
                if(this.listado_mapas[i].dia == false){
                    this.listado_mapas[i].visible = true;
                }else {
                    this.listado_mapas[i].visible = false;
                }
            }
        }
    }

    MostrarMapas(){
        for(var i=0; i< this.listado_mapas.length; i++){
            this.listado_mapas[i].visible = true;   
        }
    }
}