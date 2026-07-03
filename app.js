// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const errorcontrollers = require("./controllers/errors")

const{default:mongoose} =  require('mongoose')



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorcontrollers.pageNotFound);

const PORT = 3000;
const DB_PATH = "mongodb+srv://birlav067_db_user:vishal@learnmongo.tveg92n.mongodb.net/airbnb?appName=learnmongo"

mongoose.connect(DB_PATH).then(() => {
  app.listen(PORT, () => {
    console.log("connect to deta base")
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log("error to connect the detabase", err)
});
