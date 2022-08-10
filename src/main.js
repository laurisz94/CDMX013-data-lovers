/* eslint-disable no-undef */
//import { example } from './data.js';
import data from './data/athletes/athletes.js';

let information = data.athletes;

information.forEach(athletes => { 

const html = `
    <div class="card">
    <div class="card-image"></div>
        <h3>${athletes.name}</h3>
        <p>Team: ${athletes.team}</p>
        <p>Sport: ${athletes.sport}</p>
    </div>
        `

container.insertAdjacentHTML('afterbegin', html)
});
