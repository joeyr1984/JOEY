// Requiring necessary npm packages
// require('./client/node_modules/dotenv').config()
const express = require("express");
// const session = require("express-session");
const path = require('path');
// const http = require('http');
const bodyParser = require("body-parser");
// Requiring passport as we've configured it
// const passport = require("./config/passport");
const nodemailer = require("nodemailer");
// Requiring from nodemailer
const cors = require('cors');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;
// const db = require("./models");

// let corsOptions = {
//   origin: "http://localhost:3000"
// }

// Creating express app and configuring middleware needed for authentication
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// const httpServer = http.createServer(app);
// // For http
// if (process.env.NODE_ENV = "production") {
//   httpServer.listen(process.env.PORT2 || 80);
// }
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
app.use(cors());

app.post('/api/form', (req, res) => {
  let data = req.body;
  console.log(data);
  let smtpTransport = nodemailer.createTransport({
    service:  "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: "proj3group@gmail.com",
      pass: "Thegooniestest"
    }
  })

  let mailOptions = {
    from: data.email,
    to: "proj3group@gmail.com",
    subject: `Message from ${data.name}`,


    html: `
      <h3> Information </h3>
          <ul>
              <li>Name: ${data.name}</li>
              <li>Phone number: ${data.phone}</li>
              <li>Email: ${data.email}</li>
          </ul>

          <h3>Message</h3>
          <p>${data.message}</p>
      `
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {

    if (error) {
      res.send(error)
    }
    else {
      res.send("Success" + response)
    }
  });

  smtpTransport.close();

})
