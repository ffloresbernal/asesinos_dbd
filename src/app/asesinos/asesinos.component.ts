import { Component } from "@angular/core";
import { Asesino } from "./asesino";
import { Navigation,Router } from '@angular/router'
import  asesinos  from '../../assets/json/asesinos.json';

@Component ({
    selector:'Asesino',
    templateUrl:'./asesino.component.html',
    
})
export class AsesinosComponent {
    public asesinos_listado:Array<Asesino>;

    constructor( private _router : Router){
        this.asesinos_listado = asesinos;
    }
    
    mostrarAsesinosVar(valor:string){
        for (var i = 0; i<this.asesinos_listado.length; i++ ) {
            
            if(this.asesinos_listado[i].dificultad===valor){
                this.asesinos_listado[i].visible = true;
            }else{
                this.asesinos_listado[i].visible = false;
            }
        }
    }

    mostratTodosAsesinos(){
        for (var i = 0; i<this.asesinos_listado.length; i++ ) {
            this.asesinos_listado[i].visible = true;
        }
    }
    MostrarPaginaAsesino(assesin:string){
        this._router.navigate(['/asesinos/',assesin])
    }

}