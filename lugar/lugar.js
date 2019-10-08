const axios = require('axios');

let getLugarLatLng = async(dir) => {

    let lugar = encodeURI(dir);
    let url = `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ lugar }`;

    //console.log(url);

    //Obtener latitud y longitud de un lugar
    const instance = axios.create({
        baseURL: url,
        timeout: 3000,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'b523bc798emsh2f9daa6707fec54p1ff568jsn3fb5c6789d46'
        }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const registro = resp.data.Results[0];

    const direccion = registro.name;
    const latitud = registro.lat;
    const longitud = registro.lon;

    return {
        direccion,
        latitud,
        longitud
    }

}

module.exports = {
    getLugarLatLng
}