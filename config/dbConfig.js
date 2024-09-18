const mongoose = require("mongoose");
// mongoose.connect(process.env.mongo_url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });
console.log(process.env.mongo_url);
mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;
connection.on("error", () => {
  console.log("Error connecting to the database");
});
connection.on("connected", () => {
  console.log("MongoDb Connection Successful");
});
module.exports = connection;
