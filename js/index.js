function fetchMovies() {
  fetch("https://tvjan-tvmaze-v1.p.rapidapi.com/schedule?filter=primetime", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
      "x-rapidapi-key": "6b3bcab4bcmsh171fc4476497db1p1892f9jsne711e821ae42"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    let schedules = '';
    data.forEach(show => {
      const backgroundStyle = `
        background-image: url(${show.image ? show.image : show.show.image.medium});
        background-size: cover;
      `
      schedules += `
        <li class="trainers-portfolio-info" style="background-image: url(${show.image ? show.image : show.show.image.medium}); background-size: cover;"
          <div>
            <h3>${show.show.name} : ${show.name}/h3>
            <h5>Season: ${show.season}</h5>
            <div class="grey-divider"></div>
            ${show.summary}
          </div>
        </li>
      `
    })

    document.getElementById("schedule").innerHTML = schedules;
  })
  .catch(err => {
    console.log(err);
  });
}

fetchMovies()
