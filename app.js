const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    try {
        datoCiudad = await lugar.getLugarLatLng(direccion);
        datoClima = await clima.getClima(datoCiudad.lat, datoCiudad.lng);

        const respuesta = `El clima de ${datoCiudad.direccion} es de ${datoClima}°C`;
        return respuesta;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion).then(console.log).catch(console.log);