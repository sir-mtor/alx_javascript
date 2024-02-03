const request = require('request');

// Extracting the movie ID from command line arguments
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Making the GET request to the Star Wars API
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
  } else {
    // Parsing the JSON response
    const movieData = JSON.parse(body);
    // Extracting the characters array
    const characters = movieData.characters;

    // Making requests to fetch character data and printing their names
    characters.forEach((characterUrl) => {
      request.get(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error('Error fetching character data:', charError);
        } else if (charResponse.statusCode !== 200) {
          console.error('Failed to fetch character data. Status code:', charResponse.statusCode);
        } else {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        }
      });
    });
  }
});
