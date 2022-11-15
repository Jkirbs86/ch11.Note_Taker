const express = require("express");
const { v4: uuidv4 } = require('uuid');
const app = express();

// Running the port
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES required
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`app is listening on PORT: ${PORT}`);
});