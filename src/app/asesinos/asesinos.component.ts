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
            new Asesino ('Trampero', 4.8, 'Facil'),
            new Asesino ('Enfermera', 3.8, 'Dificil'),
            new Asesino ('Espiritu', 4.4, 'Dificil'),
            new Asesino ('Legion', 4.6, 'Facil'),
            new Asesino ('Freddy',4.8,'Medio'),
        ]
    }


}