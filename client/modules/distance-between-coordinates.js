/***
  Calculates great-circle distances between the two points – that is, the
  shortest distance over the earth’s surface using the ‘Haversine’ formula.
***/
export default function(user,channel) {
  // define lat and lng variables from input
  let lat1 = user.lat, lng1 = user.lng, lat2 = channel.location.lat, lng2 = channel.location.lng,
  // function that turns degrees in to radians
      deg2rad = (deg) => { return deg * (Math.PI/180); },
  // radius of the earth in km
      R = 6371,
  // find the distance between similare coordinates
      latDistance = deg2rad(lat2-lat1), lngDistance = deg2rad(lng2-lng1),
      a = Math.sin(latDistance/2) * Math.sin(latDistance/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(lngDistance/2) * Math.sin(lngDistance/2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)),
  // distance in km
      d = R * c;
  return d;
}
