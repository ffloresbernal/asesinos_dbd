import { Component } from "@angular/core";
import { Asesino } from "./asesino";

@Component ({
    selector:'Asesino',
    templateUrl:'./asesino.component.html',
    
})
export class AsesinosComponent {
    public asesinos_listado:Array<Asesino>;
    
    constructor(){
        this.asesinos_listado = [
            new Asesino ('Trampero', 4.8, 'Facil',true),
            new Asesino ('Enfermera', 3.8, 'Dificil',true),
            new Asesino ('Espiritu', 4.4, 'Dificil',true),
            new Asesino ('Legion', 4.6, 'Facil',true),
            new Asesino ('Freddy',4.8,'Medio',true),
            new Asesino ('Plaga',4.6,'Dificil',true),
        ]
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


}