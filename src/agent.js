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
  load: (payload = '上海') =>
    requests.get(`https://www.apiopen.top/weatherApi?city=${payload}`)
};

const poem = {
  load: () => requests.get('https://api.apiopen.top/recommendPoetry')
};

const music = {
  load: () => requests.get('https://api.apiopen.top/musicRankings')
};

const agent = { weather, poem, music };
export default agent;
