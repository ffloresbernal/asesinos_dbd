import axios from "axios";

export class PeticionesService{
    constructor(
    ){
        
    }

    getUsuarios(){
        const a = axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => { 
            console.log(res.data)
        });
       return  a
    }


}

