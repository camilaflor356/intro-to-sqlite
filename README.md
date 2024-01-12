# Intro to SQLite
This repo provides a very basic template for using `sqlite` with `express`. It is part of the [Software Engineering](https://edu.lester-lee.com/software-engineering/) course.

## Assignment
Write the rest of the missing endpoints in `index.js` to create a simple backend for a CRUD app.  This will require you to write code in `db.js` as well!

The [documentation for sqlite3](https://github.com/mapbox/node-sqlite3/wiki/API) will be very helpful.

Make sure that you return the correct HTTP status code as well.

### index.js
Most of this file should look familiar. Look at past assignments to review what each section of this file does.

You can ignore the middleware code -- at a very basic level, this code allows us to test our front end later on in this course.

### db.js
The database `foo.db` contains one table named `user`.

Use DB Browser to explore this database before you write any code!

### Usage
To get a single user by id, use this endpoint and enter id number (localhost:4000/user/:id)
app.get("/user/:id", db.getUserById);

To see all users, use this endpoint (localhost:4000/allinfo)
app.get("/allinfo", db.getall);

To create a new user, use this endpoint and enter the desired id number and name (localhost:4000/newuser/:id/:name)
app.get("/newuser/:id/:name", db.newuser);

To update a user's name, use this endpoint and enter your name and id number (localhost:4000/updateusername/:name/:id)
app.get("/updateusername/:name/:id", db.newusername);

To delete a user, use this endpoint and enter the user's id number (localhost:4000/deleteuser/:id)
app.get("/deleteuser/:id", db.deleteuser);
to 