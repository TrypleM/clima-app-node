const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: {
            'x-rapidapi-key': '4792c64588msh969cd3a0c603721p1a002ajsn2c810766c8b7',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    });

    const resp = await instance.get();

    const data = resp.data;

    if (data.cod !== 200) {
        throw new Error(data.message);
    }

    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;




    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}