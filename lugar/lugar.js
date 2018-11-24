const axios = require('axios');

const getLugarLtaLng = async (direccion) => {
  const API_KEY = 'AIzaSyBE_k3XZk3VLjB21mY2aQEOBXoiXocwff8';
  let encodedAdress = encodeURI(direccion);
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=${API_KEY}`;

  let resp = await axios.get(url)

  if(resp.data.status === 'ZERO_RESULTS') {
    throw new Error(`No hay resultados para ${direccion}`);
  }

  let results = resp.data.results[0];
  let coords = results.geometry.location;

  return {
    direccion: results.formatted_address,
    lat: coords.lat,
    lng: coords.lng
  }
}

module.exports = {
  getLugarLtaLng
}
