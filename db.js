//-----------------------------
//#region Database Connection
//-----------------------------
const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, "foo.db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});

//#endregion Database Connection

//-----------------------------
//#region Routes
//-----------------------------
/**
 * Gets a single user by id
 */
const getUserById = (request, response) => {
  // Parse the id to generate a SQLite query
  const id = parseInt(request.params.id);
  const query = `SELECT * FROM user WHERE id = ?`;

  // db.get will replace all ? in query sequentially with
  // items from the array passed as the second parameter
  // and then run the callback function passed as the third param
  // What does the callback function do?
  db.get(query, [id], (error, result) => {
    if (error) {
      console.error(error.message);
      response.status(400).json({ error: error.message });
      return;
    }
    // If nothing is returned, then result will be undefined
    if (result) {
      response.json(result);
    } else {
      response.sendStatus(404);
    }
  });
};

// ----- FILL IN BELOW -----
// Write and export the rest of the functions needed by index.js!
// Get all users

const getall = (request,response) => db.all("SELECT * FROM user", (err, result) => {
  response.json(result);
});


// Create a new user
const newuser = (request, response) => {
  // Parse the id to generate a SQLite query
  const id = parseInt(request.params.id);
  const query = `INSERT INTO user (name, id) VALUES (?, ?)`;

  db.get(query, [name, id], (error, result) => {
      response.json(result);
    });
  };

// Update a user's name, given an id
  const newusername = (request, response) => {
    // Parse the id to generate a SQLite query
    const id = parseInt(request.params.id);
    const query = `UPDATE user SET name = ? WHERE id = ?;   `;
    db.get(query, [name, id], (error, result) => {
      if (error) {
        console.error(error.message);
        response.status(400).json({ error: error.message });
        return;
      }
      if (result) {
        response.json(result);
      } else {
        response.sendStatus(404);
      }
    });
  };

// Delete a user by id
  const deleteuser = (request, response) => {
    // Parse the id to generate a SQLite query
    const id = parseInt(request.params.id);
    const query = `DELETE FROM user WHERE id = ?;  `;
  
    // db.get will replace all ? in query sequentially with
    // items from the array passed as the second parameter
    // and then run the callback function passed as the third param
    // What does the callback function do?
    db.get(query, [id], (error, result) => {
      if (error) {
        console.error(error.message);
        response.status(400).json({ error: error.message });
        return;
      }
      // If nothing is returned, then result will be undefined
      if (result) {
        response.json(result);
      } else {
        response.sendStatus(404);
      }
    });
  };
  
  
//#endregion Routes

// This allows `index.js` to use functions defined in this file.
module.exports = {
  getUserById,
  getall,
  newuser,
  newusername,
  deleteuser,
};
