const express = require('express');
const myRoute = require('./routes/route');
const app = express();
const cors = require('cors');


let corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use('/api',myRoute);

//serverUp at port 3003 
app.listen(3003, function (req, res) {
  console.log("server is running on 3003");
})
