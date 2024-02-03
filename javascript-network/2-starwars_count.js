const request = require('request');

const apiUrl = process.argv[2];

const characterId = '18';

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
  } else {
    
    const filmsData = JSON.parse(body);
    
    const count = filmsData.results.filter((film) => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)).length;
    console.log(count);
  }
});
