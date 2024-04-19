// functions/passwordChecker.js

exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    // Return the HTML form on a GET request
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `
        <html>
        <head>
          <title>Password Prompt</title>
        </head>
        <body>
          <form action="/.netlify/functions/passwordChecker" method="post">
            <label for="password">Enter Password:</label>
            <input type="password" id="password" name="password">
            <button type="submit">Submit</button>
          </form>
        </body>
        </html>
      `
    };
  } else if (event.httpMethod === "POST") {
    // Check the password on a POST request
    const params = new URLSearchParams(event.body);
    const password = params.get('password');
    const validPasswords = ['example', 'test123', 'password'];

    if (validPasswords.includes(password)) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: '<h1>Success: Password accepted!</h1>'
      };
    } else {
      return {
        statusCode: 401,
        headers: { 'Content-Type': 'text/html' },
        body: '<h1>Error: Invalid password.</h1>'
      };
    }
  }
};
