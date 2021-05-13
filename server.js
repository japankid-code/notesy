const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

// middlewares, parse incoming string or array database
app.use(express.urlencoded({ extended: true }));
// middlewares, parse incoming JSON datas sent thru POST request
app.use(express.json());
// middlewares, serves up all files in public
app.use(express.static('./public'));
// middlewares, for informing the app about routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
})