const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}5&lon=${lng}&appid=32f843d833c38373032f825c4a92418a&units=metric`)

    if (resp.data.cod !== 200) {
        throw new Error(data.message);
    }
    return resp.data.main.temp;
}

module.exports = {
    getClima
}