import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const responseBody = res => res.body;

const encode = encodeURIComponent;

const requests = {
  get: url => superagent.get(`${url}`).then(responseBody),
  post: (url, body) => superagent.post(`${url}`, body).then(responseBody)
};

const weather = {
  load: (cityId = 101030100) =>
    requests.get(`http://t.weather.sojson.com/api/weather/city/${cityId}`)
};

const job = {
  load: (description, location) =>
    requests.get(
      `https://jobs.github.com/positions.json?description=${encode(
        description
      )}&location=${encode(location)}`
    )
};

export { weather, job };
