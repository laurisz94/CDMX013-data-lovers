/* eslint-disable no-undef */
import {filterGender, filterSport, filterTeam, orderName} from './data.js';
//import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
import generadorHTML from './generadorHTML.js'


// Variables
const selectGender = document.querySelector('#gender')
const selectSport = document.querySelector('#sport')
const selectTeam = document.querySelector('#team')
const element = document.querySelector('#container')
const order = document.querySelector('#order')

// Renderizar Data 
// Eliminar duplicados
const information = data.athletes.map(athlete => [athlete.name, athlete]);
const athletesNoDuplicates = new Map(information);
const athletesNew = [...athletesNoDuplicates.values()];

// HTML
let html =''

athletesNew.forEach(athletes =>html+=generadorHTML(athletes));

container.insertAdjacentHTML('afterbegin', html);

//Filtrado Genero con evento
selectGender.addEventListener('change', (e) => {
    element.innerHTML =''
    html =''

    let typeGender = filterGender(e.target.value, athletesNew)

    //console.log(filterGender(e.target.value, athletesNew));

    typeGender.forEach(athletes =>html+=generadorHTML(athletes));

    //console.log(typeGender)
container.insertAdjacentHTML('afterbegin', html);

});

//Filtrado de Deporte con Evento
selectSport.addEventListener('change', (e) => {
    element.innerHTML =''
    html =''

    let typeSport = filterSport(e.target.value, athletesNew)

    //console.log(filterSport(e.target.value, athletesNew));

    typeSport.forEach(athletes =>html+=generadorHTML(athletes));

    //console.log(typeSport)
container.insertAdjacentHTML('afterbegin', html);
});

//Filtrado de Equipo por Evento
selectTeam.addEventListener('change', (e) => {
    element.innerHTML =''
    html =''

    let typeTeam = filterTeam(e.target.value, athletesNew);

    //console.log(filterTeam(e.target.value, athletesNew));

    typeTeam.forEach(athletes =>html+=generadorHTML(athletes));

    //console.log(typeTeam)
container.insertAdjacentHTML('afterbegin', html);
});

order.addEventListener('change', (e) => {
    element.innerHTML = ''
    html = ''

    let orderAthletes = orderName(e.target.value, athletesNew);

    orderAthletes.forEach(athletes =>html+=generadorHTML(athletes));
    //console.log(orderName(e.target.value));

    //console.log(orderAthletes)

    container.insertAdjacentHTML('afterbegin', html);
})

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





