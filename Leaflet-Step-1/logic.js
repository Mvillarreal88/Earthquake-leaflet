//Creating the URL variable to hold
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";

//Get request to URL
d3.json(queryUrl).then(function (data) {
  createFeatures(data.features);
});

  // Give the feature a popup with the place and time of the earthquake displayed
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }

  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    },
    style: styleFunc,
  });
