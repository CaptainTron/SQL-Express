const express = require("express");
const app  = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

// Router To get all the routes
const Router = require("./Router/Router");
app.use('/api', Router);

// Start the Server.... at port 5000
app.listen(5000, console.log("Server is Listening to port 5000...."));