const generradorHTML =(athletes)=>{
    let html=''
    if (athletes.gender == 'F') {
         html= `
        <div class="card" id="container_male">
        <div class="card-image"></div>
        <div class="card-opacidad"></div>
            <img src="src/imagenes/sportswear-svgrepo-com.svg" alt="avatar-female" class="avatar">
                <h4>${athletes.name}</h4>
                <p>Team: ${athletes.team}</p>
                <p>Sport: ${athletes.sport}</p>
        </div>
            `

        
    } else {
         html = `
        <div class="card">
        <div class="card-image"></div>
        <div class="card-opacidad"></div>
            <img src="src/imagenes/sportswear-svgrepo-com (1).svg" alt="avatar-male" class="avatar">
                <h4>${athletes.name}</h4>
                <p>Team: ${athletes.team}</p>
            <p>Sport: ${athletes.sport}</p>
        </div>
            `
          
    }
    return html
}

export default generradorHTML