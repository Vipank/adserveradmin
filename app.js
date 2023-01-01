const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/advertiser",require("./routes/advertiser"));
app.use("/publisher",require("./routes/publisher"));

module.exports = app;