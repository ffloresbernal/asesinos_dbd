import { Component } from "@angular/core";
import { Asesino } from '../asesino';
import { Router,ActivatedRoute ,Params } from '@angular/router';
import  asesinos  from '../../../assets/json/asesinos.json';

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
    public url404=false;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this.asesinos_listado = asesinos;

    }

    ngOnInit(){
        this._route.params.forEach((params : Params) =>{
            this.assesin.nombre = params['nombre'];
        })

        if(this.asesinos_listado.find( Asesino => Asesino.nombre === this.assesin.nombre) ){
            this.url404 = true;
        }else{
            this.url404 = false;
        }
    }

    VolverAsesinos(){
        this._router.navigate(['/asesinos']);
    }



}