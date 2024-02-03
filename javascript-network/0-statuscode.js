// Import the 'request' module
const request = require('request');

// Extract the URL from command line arguments
const url = process.argv[2];

// Make the GET request
request.get(url, (error, response) => {
  if (error) {
    // If there's an error, display it
    console.error('Error:', error);
  } else {
    // Display the status code
    console.log('code:', response.statusCode);
  }
});
