// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// start the server listening for requests
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})