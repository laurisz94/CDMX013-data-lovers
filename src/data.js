// estas funciones son de ejemplo;

export const filterGender = (gender, data ) => data.filter (athletes => athletes.gender == gender);

export const filterSport = (sport, data ) => data.filter (athletes => athletes.sport == sport);

export const filterTeam= (team, data ) => data.filter (athletes => athletes.team == team);

export const orderName = (name, data ) => {
  
  if (name === "AZ") {
    return data.sort((a,b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1:1) ;
  }

  if (name === "ZA") {
    return data.sort ((a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? -1:1)
  }
};
//donde se va a realizar las funciones de filtrado, busqueda, ordernar, estadistica.
