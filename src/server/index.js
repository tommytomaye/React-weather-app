const express = require('express');
const cors = require('cors');
const app = express();
const weatherInfoData = require('./weatherInfo.json');

app.use(cors());

app.get('/weather', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(weatherInfoData);
});

app.listen(3000, () => {
  console.log('Weather API is listening on port 3000');
});
