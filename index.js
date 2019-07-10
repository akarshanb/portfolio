//server.js
const express = require('express');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
// const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/send-email', function (req, res) {
  console.log(req);
  console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
  let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          // should be replaced with real sender's account
          user: 'ishu.1492@gmail.com',
          pass: '!Espeon92'
      }
  });
  let mailOptions = {
      // should be replaced with real recipient's account
      to: 'akarshan.bansal12@gmail.com',
      subject: req.body.subject,
      body: req.body.message
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.writeHead(301, { Location: 'index.html' });
  res.end();
});

app.listen(port, function() {
    console.log("Server started at http://localhost:%s", port);
});