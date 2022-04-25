const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.json())
mongoose.connect
('mongodb+srv://ranfa:232003@cluster0.d2yn9.mongodb.net/2bPrecise?retryWrites=true&w=majority');
var cors = require('cors') 
app.use(cors())
const employeeRouter = require("./routes/employee-routes");

app.use("/api/2bPrecise",employeeRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })