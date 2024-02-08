const request = require('request');

const apiURL = process.argv[2];

if (!apiURL) {
  console.error('Please provide the API URL as an argument.');
  process.exit(1);
}

request(apiURL, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    return;
  }

  const data = JSON.parse(body);
  let wedgeFilms = 0;

  data.results.forEach(film => {
    if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
      wedgeFilms++;
    }
  });

  console.log(`${wedgeFilms}`);
});

