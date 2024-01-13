let myMap = L.map("map", {
    center: [38, -115],
    zoom: 5
});


//Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load Data
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Fetch Earthquake Data
d3.json(url).then(function(data) {
    console.log(data);

    mapFeatures(data.features);
});


// Marker size function
function markerSize(magnitude) {
    return magnitude * 2000;
};

 
// Marker color function
function chooseColor(depth){
    if (depth < 10) return "#00FF00";
    else if (depth < 30) return "greenyellow";
    else if (depth < 50) return "yellow";
    else if (depth < 70) return "orange";
    else if (depth < 90) return "orangered";
    else return "#FF0000";
  };
  
// Function to display Earthquake information
function onEachFeature(features, layer) {
    layer.bindPopup(`<h3>${features.properties.place}</h3><hr><p>${new Date(features.properties.time)}</p>`);
};
  
  // Circles function
  function pointToLayer(feature, latlng) {
      var circleMarker = L.circle(latlng, {
          radius: markerSize(feature.properties.mag) * 10,
          fillColor: chooseColor(feature.geometry.coordinates[2]),
          fillOpacity: 0.7,
          color: "black",
          weight: 0.5
      });
      return circleMarker;
  };
  
  
 // Adding Earthquake Data!
function mapFeatures(data) {
    var earthquakes = L.geoJSON(data, {
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer
    });
    earthquakes.addTo(myMap);
};


// Creating the legend
function createLegend() {
    const legend = L.control({position:'bottomright'});
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [-10, 10, 30, 50, 70, 90];

        for (let i = 0; i < grades.length; i++) {
            const from = grades[i];
            const to = grades[i + 1];
            const label = `${from}${to ? `&ndash;${to}` : '+'}`;

            div.innerHTML += `<div>${label}</div>`;

        }
        return div;
    };
    legend.addTo(myMap);
};

// Call the function for the legend
createLegend();