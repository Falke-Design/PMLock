/* eslint-disable */
// Provide your access token
const accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

// set mapbox tile layer
const mapboxTiles1 = L.tileLayer(
  `https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
  {
    attribution:
      '&copy; <a href="https://www.mapbox.com/feedback/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
);

const map = L.map('example2')
  .setView([51.505, -0.09], 13)
  .addLayer(mapboxTiles1);

const m1 = L.circleMarker([51.50313, -0.091223], { radius: 10 });
const m2 = L.marker([51.50614, -0.0989]);
const m3 = L.marker([51.50915, -0.096112], { pmIgnore: true });

const mGroup = L.layerGroup([m1, m2, m3]).addTo(map);
// mGroup.pm.enable();

map.pm.addControls();

// GEOSJON EXAMPLE
const geoJsonData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { customGeometry: { radius: 50 } },
      geometry: {
        type: 'Point',
        coordinates: [-0.152843, 51.486742, 77],
      },
    },
    {
      type: 'Feature',
      properties: { customGeometry: { radius: 20 } },
      geometry: {
        type: 'Point',
        coordinates: [-0.151727, 51.487472, 77],
      },
    },
    {
      type: 'Feature',
      properties: { customGeometry: { radius: 80 } },
      geometry: {
        type: 'Point',
        coordinates: [-0.153636, 51.486562, 77],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.15369, 51.486973, 77],
            [-0.153853, 51.48686, 77],
            [-0.154183, 51.486968, 77],
            [-0.154001, 51.487087, 77],
            [-0.15369, 51.486973, 77],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.15252, 51.487201, 77],
            [-0.152789, 51.487281, 77],
            [-0.153025, 51.487097, 77],
            [-0.152633, 51.487002, 77],
            [-0.152448, 51.487088, 77],
            [-0.15252, 51.487201, 77],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.154241, 51.487382, 77],
            [-0.1545, 51.487608, 77],
            [-0.154905, 51.487384, 77],
            [-0.154343, 51.487322, 77],
            [-0.154241, 51.487382, 77],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { customGeometry: { radius: 50 } },
      geometry: {
        type: 'Point',
        coordinates: [-0.153366, 51.487348, 77],
      },
    },
  ],
};

const theCollection = L.geoJson(geoJsonData, {
  pointToLayer: (feature, latlng) => {
    if (feature.properties.customGeometry) {
      return new L.Circle(latlng, feature.properties.customGeometry.radius, {pmLock: true});
    } else {
      return new L.Marker(latlng);
    }
  },
  // onEachFeature: (feature, layer) => {
  //     layer.addTo(map);
  // },
});

theCollection.addTo(map);

const b = theCollection.getBounds();
map.fitBounds(b);

map.pm.enableDraw('Circle',{pathOptions: {pmLock: true}});
map.pm.disableDraw('Circle');

pmLock = new L.PMLock(map);