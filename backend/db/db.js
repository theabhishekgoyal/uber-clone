const mongoose = require('mongoose');

function connectToDb() {
  mongoose.connect(process.env.DB_URL)
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.error('Error connecting to database: ', error.message);
    });
}
module.exports = connectToDb;