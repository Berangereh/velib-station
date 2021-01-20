

function infoVelib () {
    fetch(`https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=Mairie+du+11%C3%A8me&facet=station_state&facet=kioskstate&facet=creditcard&facet=overflowactivation&facet=nbbike`)
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE NOT OK");
        }
      })
      .then(function (data) {   
        console.log(data); 
        velibStation(data);
      })
      .catch((error) => {
        console.error("FETCH ERROR:", error);
      });

  function velibStation(data) {
    const name = data.records[0].fields.name;
    const nameDiv = document.getElementById("name");
    nameDiv.innerHTML = name;
    const capacity = data.records[0].fields.capacity;
    const capacityDiv = document.getElementById("capacity");
    capacityDiv.innerHTML = capacity;
    const mechanical = data.records[0].fields.mechanical;
    const mechanicalDiv = document.getElementById("mechanical");
    mechanicalDiv.innerHTML = mechanical;
    const ebike = data.records[0].fields.ebike;
    const ebikeDiv = document.getElementById("ebike");
    ebikeDiv.innerHTML = ebike;
    const numdocksavailable = data.records[0].fields.numdocksavailable;
    const numdocksavailableDiv = document.getElementById("numdocksavailable");
    numdocksavailableDiv.innerHTML = numdocksavailable;
    const coordinates = data.records[0].geometry.coordinates;
    const coordinatesDiv = document.getElementById("coordinates");
    coordinatesDiv.innerHTML = coordinates;
    console.log(Math.random())
  }



}

setInterval(infoVelib, 3000)