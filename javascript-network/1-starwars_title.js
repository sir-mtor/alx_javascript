const request = require('request');

// Extract the movie ID from command line arguments
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make the GET request to the Star Wars API
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
  } else {
    // Parse the JSON response
    const movieData = JSON.parse(body);
    // Extract and print the movie title
    console.log(movieData.title);
  }
});
