const axios = require('axios');

const getClima = async (lat, lng) => {

  const url = 'https://api.openweathermap.org/data/2.5/weather';
  let params = `?lat=${lat}&lon=${lng}&units=metric`;
  let appid = `&appid=61371dba46dee7b4a72050085fd9c709`
  let resp = await axios.get(url + params + appid);

  let temp = resp.data.main.temp;
  return temp;
}

module.exports = {
  getClima
}
