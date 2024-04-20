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
          <form action="/.netlify/functions/password8" method="post">
	    <p>
Im Nebel der Physik, wo Kräfte verborgen und Geheimnisse sich verbergen,
Dort liegt ein Grundsatz, der das Universum in seiner Essenz lenkt.
Wo Bewegung erzeugt und Veränderung gesteuert wird,
Dort ruht die Antwort verborgen, in einem Gesetz von ewiger Gültigkeit.
</p><p>
Suche nicht nach offensichtlichen Zeichen oder greifbaren Beweisen,
Doch finde die Lösung dort, wo das Gleichgewicht bestimmt.
Wo die Natur ihr Mysterium enthüllt und das Unmögliche wahr wird,
In einem Labyrinth des Wissens, wo die ersten Sätze die Weisheit bergen.</p>
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
    const validPasswords = ['Energieerhaltung', 'Energieerhaltungssatz', 'Gesetz der Energieerhaltung', 'Energieerhaltungsgesetz'];

    if (validPasswords.includes(password)) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: '<h1>Success: Password accepted!</h1><a href="https://docs.google.com/document/d/1wRohjP2jsK4X_A0TEpsVo-sctHFAZBuWdJ44D6s1R8c">Hinweis</a>'
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

