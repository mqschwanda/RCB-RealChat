var MapboxClient = require('mapbox');
var client = new MapboxClient('pk.eyJ1IjoiaGFwcGVsajEiLCJhIjoiY2l4eGR4Y3NpMDAyejMybG0xYWtqdjQwNCJ9.vuXjCa1yFa51nwIr_4l2XQ');
// var geoTag = client.geocodeForward('Chester, NJ', function(err, res) {
//   return res;
// });
// var geoTag = require('./data/geoTag.js');


module.exports = function (router) {

 router.get('/api/geoTag', function (req, res) {
    geoTag = "geoTag Object Here";
    res.json(geoTag);
  });

 router.post('/api/clear', function () {
    geoTag = null;
    console.log(geoTag);
  });

};