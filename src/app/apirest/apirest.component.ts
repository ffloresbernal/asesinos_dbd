import {Component} from '@angular/core'
//import {PeticionesService} from '../services/api.service';
import axios from 'axios';

@Component({
    selector:'apirestComponent',
    templateUrl:'./apirest.component.html'
})
export class apirestComponent{
    public camaradas = true;

    constructor()
    {
        
    }

    async ngOnInit(){
        const Axios = await axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => {
            console.log(res.data);
        })
    }

    cambiarCamarada(cambio:boolean){
        if(cambio){
            this.camaradas=false;
        }else{
            this.camaradas=true;
        }
    }
}