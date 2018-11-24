const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la cuidad para obtener el clima',
    demand: true
  }
}).argv;

let getInfo = async (direccion) => {
  try{
    let coords = await lugar.getLugarLtaLng(direccion);
    let temp = await clima.getClima(coords.lat, coords.lng);
    return `El clima en ${coords.direccion} es de ${temp}Cº`;
  }catch (err){
    return `No se pudo determinar el clima de ${direccion}`;
  }

}

getInfo(argv.direccion)
      .then(mensaje => console.log(mensaje))
      .catch(err => console.log(err));
