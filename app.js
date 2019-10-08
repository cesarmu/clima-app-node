//Aplicación que regresa el clima de un lugar, que es recibido por linea de comandos
//Ejemplo: node app -d "New York"
//Y retorna El clima de New York City, New York es de 15.84 °C
//Se hacen llamadas a 2 servicios, el primero para obtener latitud y longitud y 
//el segundo para obtener el clima
//https://rapidapi.com/dev132/api/city-geo-location-lookup  para obtener latitud y longitud
//https://openweathermap.org/   para obtener el clima



const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const getInformacion = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.latitud, coords.longitud)

        return `El clima de ${coords.direccion} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

///Ejecución de la función, toma como parámetro argv.direccion
getInformacion(argv.direccion)
    .then(console.log)
    .catch(console.log);