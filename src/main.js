/* eslint-disable no-undef */
import {filterData} from './data.js';
import data from './data/athletes/athletes.js';
import generadorHTML from './generadorHTML.js'


// Variables
const selectGender = document.querySelector('#gender')
const selectSport = document.querySelector('.sport')
const selectCountry = document.querySelector('.team')

// Renderizar Data
const information = data.athletes.map(athlete => [athlete.name, athlete]);
const athletesNoDuplicates = new Map(information);
const athletesNew = [...athletesNoDuplicates.values()];


let html =''

athletesNew.forEach(athletes =>html+=generadorHTML(athletes));

container.insertAdjacentHTML('afterbegin', html);

//Funciones

selectGender.addEventListener('change', (e) => {
    html =''

    e.target.value
    let femaleFilter = filterData(athletesNew)
    femaleFilter.forEach(athletes =>html+=generadorHTML(athletes));
    
container.insertAdjacentHTML('afterbegin', html);

})

/*

function filter() {
    const element = document.querySelector('#container');
    element.innerHTML='';

    
    femaleFilter.forEach(fem => {
        if(fem.gender == 'F') {
            const html = `
            <div class="card" id="container_male">
            <div class="card-image"></div>
            <div class="card-opacidad"></div>
                <img src="./imagenes/sportswear-svgrepo-com.svg" alt="avatar-female" class="avatar">
                    <h4>${fem.name.toUpperCase()}</h4>
                    <p>Team: ${fem.team}</p>
                    <p>Sport: ${fem.sport}</p>
            </div>
                `
    
            container.insertAdjacentHTML('afterbegin', html);
        }
    
    });
}*/



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





