/* eslint-disable no-undef */
//import { example } from './data.js';
import data from './data/athletes/athletes.js';

let information = data.athletes;
let information2= information.map(item => {
    return [item.name,item]
})

let athletesNoDuplicates = new Map(information2);
let atheletesNew= [...athletesNoDuplicates.values()];
console.log(atheletesNew);
//const unicos = []*/

//function calcularMedallas (datos) {
    //console.log(datos)
    //let atletasMedallas = []

 //datos.forEach(atleta => {
    //if (athletasMedallas no existe el atleta) {
        //empujar a atletasMEDALLAS{nombre:¨atleta.name, medallas:¨[]}
    //}
 //})   
//}

//calcularMedallas(information)

atheletesNew.forEach(athletes => { 
    if(athletes.gender == 'F') {
        const html = `
        <div class="card">
        <div class="card-image"></div>
        <div class="card-opacidad"></div>
            <img src="./imagenes/sportswear-svgrepo-com.svg" alt="avatar-femel" class="avatar">
                <h3>${athletes.name}</h3>
                <p>Team: ${athletes.team}</p>
                <p>Sport: ${athletes.sport}</p>
        </div>
            `
    
    container.insertAdjacentHTML('afterbegin', html) 
} else {
    const html = `
        <div class="card">
        <div class="card-image"></div>
        <div class="card-opacidad"></div>
            <img src="./imagenes/sportswear-svgrepo-com (1).svg" alt="avatar-male" class="avatar">
                <h3>${athletes.name}</h3>
                <p>Team: ${athletes.team}</p>
            <p>Sport: ${athletes.sport}</p>
        </div>
            `
    
    container.insertAdjacentHTML('afterbegin', html) 
}


});
