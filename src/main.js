/* eslint-disable no-undef */
//import { example } from './data.js';
import data from './data/athletes/athletes.js';

let information = data.athletes;

information.forEach(athletes => { 
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
