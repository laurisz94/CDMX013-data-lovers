/* eslint-disable no-undef */
//import {} from './data.js';

import data from './data/athletes/athletes.js';

// Variables
const iconHam = document.querySelector('.icon');
const menu = document.querySelector('.menu');
const filterFem = document.querySelector('.filter_female');
// Variables para eliminar duplicados
const information = data.athletes.map(athlete => [athlete.name, athlete]);
const athletesNoDuplicates = new Map(information);
const athletesNew = [...athletesNoDuplicates.values()];

// Eventos
iconHam.addEventListener('click', toogleMenu);
filterFem.addEventListener('click', filter);


//Funciones
function toogleMenu() {
    menu.classList.toggle('inactive')
}
function filter() {
    menu.classList.toggle('inactive')
    const element = document.getElementById('container');
    element.innerHTML='';

    let filterData = athletesNew.filter(person => person.gender == "F")
    filterData.forEach(fem => {
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
}





athletesNew.forEach(athletes => {
    if (athletes.gender == 'F') {
        const html = `
        <div class="card" id="container_male">
        <div class="card-image"></div>
        <div class="card-opacidad"></div>
            <img src="./imagenes/sportswear-svgrepo-com.svg" alt="avatar-female" class="avatar">
                <h4>${athletes.name.toUpperCase()}</h4>
                <p>Team: ${athletes.team}</p>
                <p>Sport: ${athletes.sport}</p>
        </div>
            `

        container.insertAdjacentHTML('afterbegin', html);
    }
});

athletesNew.forEach(athletes => {
    if (athletes.gender == 'M') {
        const html = `
        <div class="card">
        <div class="card-image"></div>
        <div class="card-opacidad"></div>
            <img src="./imagenes/sportswear-svgrepo-com (1).svg" alt="avatar-male" class="avatar">
                <h4>${athletes.name.toUpperCase()}</h4>
                <p>Team: ${athletes.team}</p>
            <p>Sport: ${athletes.sport}</p>
        </div>
            `
        container.insertAdjacentHTML('afterbegin', html)
    }

});


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





