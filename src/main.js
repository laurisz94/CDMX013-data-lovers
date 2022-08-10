//import { example } from './data.js';
// import data from './data/lol/lol.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

let information = data.athletes;

//console.log(information)


information.forEach(athletes => { 

const html = `
    <div class="card">
        <img src="./imagenes/fondo rio.PNG" alt="" class="fondo">
        <h1>${athletes.name}</h1>
        <p>${athletes.team}</p>
        <p>${athletes.sport}</p>
    </div>
        `

container.insertAdjacentHTML('afterbegin', html)
});

//con mostrar los datos los personajes
//