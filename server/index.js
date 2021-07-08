const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");
const postroutes = require("./routes/posts");

const CONNNECTION_URL = `mongodb+srv://codeyash02:infotech0208@cluster0.ksto1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;
mongoose.connect(CONNNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json())
app.use("/posts", postroutes);
// app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());
app.listen(PORT, () => console.log(`server running on ${PORT} `));
