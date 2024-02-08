
const fs = require('fs');
const request = require('request');

// Extracting URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Making the GET request to the provided URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
  } else {
    // Writing the body response to the file
    fs.writeFile(filePath, body, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('File saved successfully.');
        const lines = body.split('\n');
        const text = lines[0].trim();
        console.log(text);
        console.log(`(${text.length} chars long)`);
      }
    });
  }
});
