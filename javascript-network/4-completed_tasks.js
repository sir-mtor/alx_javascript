const request = require('request');

// Extracting the API URL from command line arguments
const apiUrl = process.argv[2];

// Making the GET request to the provided API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
  } else {
    // Parsing the JSON response
    const todos = JSON.parse(body);

    // Object to store the number of completed tasks per user
    const completedTasksByUser = {};

   // Looping through the todos to count completed tasks per user
    todos.forEach((todo) => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    // Printing the number of completed tasks per user
    console.log(completedTasksByUser);
  }
});
