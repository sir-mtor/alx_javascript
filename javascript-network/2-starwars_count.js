const request = require('request');

// extract
const apiUrl = process.argv[2];

// character ID
const characterId = '18';

//make the guest request
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
  } else {
    
    // parse
    const filmsData = JSON.parse(body);
    
    //count
    const count = filmsData.results.filter((film) => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)).length;
    // print count
    console.log(count);
  }
});
