'use strict';
require('dotenv').config
const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const { httpError } = require('./utils/errors');
const passport = require('./utils/pass');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(passport.initialize());
app.use(express.static('uploads'));

app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', { session: false }), catRoute);
app.use('/user', passport.authenticate('jwt', { session: false }), userRoute);

app.use((req, res, next) => {
  const err = httpError('Not found', 404);
  next(err);
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || 'Internal server error' });
});

app.listen(port, () => console.log(`käynnistyi portilla ${port}!`
));

console.log('              __ ');
console.log('             .¨  ¨. ');
console.log('             :      :');
console.log('             | _  _ |');
console.log('          .-.|(o)(o)|.-.        _._          _._');
console.log('         ( ( | .--. | ) )     .¨,_ ¨.      .¨ _,¨.');
console.log('          ¨-/ (    ) -¨     / /¨ `  __ / /¨ `  ');
console.log('           /   ¨--¨        / /     .¨  ¨./       ');
console.log('            `"===="` /     `-`     : _  _ :      `-`');
console.log('            `      /¨              |(o)(o)|');
console.log('              `  /¨                |      |');
console.log('              /`-.-`_             /         ');
console.log('        _..:;._/V_./:;.._       /   .--.    ');
console.log('      .¨/;:;:; /^ /:;:;:¨.     |  (    )  | ');
console.log('     / /;:;:;:;| |/:;:;:;:     _  ¨--¨  /__');
console.log('    / /;:;:;:;:;_/:;:;:;:;:  .¨  ¨-.__.-¨   `-.');
