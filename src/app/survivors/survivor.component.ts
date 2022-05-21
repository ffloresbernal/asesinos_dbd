import { Component } from "@angular/core";
import { Survivor } from "./survivor";

@Component ({
    selector:'/Survivors',
    templateUrl:'./survivor.component.html',
})
export class SurvivorComponent{
    public listado_survivor:Array<Survivor>;

    constructor(){
        this.listado_survivor = [
            new Survivor('Feng Ming','Pericia Técnica - Agilidad - Alerta','Una competidora centrada en sus objetivos . . .'),
            new Survivor('Meg Thomas','Velocidad Silenciosa - Esprint - Adrenalina','Una Atleta capaz de superar en velocidad a la mayoría de los asesinos'),
            new Survivor('Jake Park','Voluntad de hierro - Espiritu calmado - Sabotear','Un Preparacionista solitario, capaz de apañárselas por su cuenta n la mayoría de las situaciones'),
        ]
    }
}

