import { Component } from "@angular/core";
import { Asesino } from '../asesino';
import { Router,ActivatedRoute ,Params } from '@angular/router';


@Component({
    selector:'SingleAsesino',
    templateUrl : './asesinopage.component.html'
})

export class SingleAsesino {
    public asesinos_listado:Array<Asesino>;
    public assesin = {
        nombre: "",
        velocidad: "",
        dificultad: "",
        visisble:""
    };

    constructor(
        private _route:ActivatedRoute,
    ){
        this.asesinos_listado = [
            new Asesino ('Trampero', 4.8, 'Facil',true),
            new Asesino ('Enfermera', 3.8, 'Dificil',true),
            new Asesino ('Espiritu', 4.4, 'Dificil',true),
            new Asesino ('Legion', 4.6, 'Facil',true),
            new Asesino ('Freddy',4.8,'Medio',true),
            new Asesino ('Plaga',4.6,'Dificil',true),
        ]
    }

    ngOnInit(){
        this._route.params.forEach((params : Params) =>{
            this.assesin.nombre = params['nombre'];
        })
    }



}