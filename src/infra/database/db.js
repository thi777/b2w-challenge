const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const mongo = new MongoMemoryServer();

require("dotenv").config();

function connect() {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV) {
      return mongoose
        .connect(process.env.DB_TEST, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
        })
        .then((res, err) => {
          if (err) return reject(err);
          resolve();
        });
    }

    return mongoose
      .connect(process.env.DB_PROD, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then((res, err) => {
        if (err) return reject(err);
        resolve();
      });
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
