'use strict';
const express = require('express');
const catroute = require('./routes/catRoute');
const userroute = require('./routes/userRoute');
const app = express();
const port = 3000;


app.use('/cat', catroute);
app.use('/users', userroute);
app.listen(port, () => console.log(`käynnistyi portilla ${port}!`));
