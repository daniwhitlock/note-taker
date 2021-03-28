const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));// linking front end code
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json());// parse incoming JSON data

//require the api routes and html routes -- create a app.use for the apiRoutes and the htmlRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});

