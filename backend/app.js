const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app =  express();
const cors = require('cors');
app.use(cors());
const connectToDb = require('./db/db');
connectToDb();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const userRouter = require('./routes/user.route');
const captainRouter = require('./routes/captain.route');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/captains', captainRouter);
app.use('/users', userRouter);

module.exports  = app;