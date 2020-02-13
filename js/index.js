import apiKey from './keys.js';

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
      console.log(show)
      const defaultImage = "https://res.cloudinary.com/mikekrantz/image/upload/v1555356246/lloyd-dirks-74271-unsplash.jpg";
      const backgroundImage = `background-image: url(${show.image ? show.image.original : show.show.image.original ? show.show.image.original : defaultImage }); background-size: cover;`
      schedules += `
        <li class="schedules-portfolio-info" style="${backgroundImage}">
          <div class="schedules-portfolio-info__details" id="show-details">
            <h3>${show.show.name}</h3>
            <h5>Season: ${show.season}</h5>
            <div class="grey-divider"></div>
            ${show.summary ? show.summary : 'Watch now :)'}
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
