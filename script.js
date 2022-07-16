async function getData() {
  const data = await fetch("https://api.openbrewerydb.org/breweries");
  const breweries = await data.json();
  console.log(breweries);
  breweries.forEach(brewery => displayBrewery(brewery));
}
getData();
function displayBrewery(brewery) {

  const createDiv = document.createElement("div");
  createDiv.setAttribute("class", "brewery");
  createDiv.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">${brewery.name}🍻</h3>
            <h5 class="card-subtitle mb-2 text-muted"> ${brewery.brewery_type}</h5>
            <p class="card-text" ${brewery.city}, ${brewery.state}</br> ${brewery.country}</p>
            <a href="#" class="btn btn-primary">${brewery.website_url}</a>
            <a href="#" class="btn btn-warning">Call: ${brewery.phone === null ? "NA" : brewery.phone}</a>
          </div>
        </div>
      `;

  document.body.append(createDiv);
}
