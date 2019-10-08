const axios = require('axios');

const appid = '639734464feb912bfd204996b923da6a';
let units = 'metric';
let url = '';
//console.log(url);

const getClima = async(latitud, longitud) => {
    url = encodeURI(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&APPID=${appid}&units=${units}`);
    //console.log(url);

    const respuesta = await axios.get(url);
    return `${respuesta.data.main.temp} °C`
        // console.log(respuesta);
}



module.exports = {
    getClima
}