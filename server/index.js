const express = require('express'),
      nodemailer = require('nodemailer'),
      bodyParser = require('body-parser');
      require('dotenv').config();

const app = express();
app.use(bodyParser.json())

const {
    USER_EMAIL,
    USER_PASS,
    SERVER_PORT
} = process.env

app.use( express.static( `${__dirname}/../build`) );

app.post('/api/sendEmail', (req, res) => {
    const output = `
    <h3>Name: ${req.body.name}</h3>
    <h3>Email: ${req.body.email}</h3>
    <h3>Subject: ${req.body.subject}</h3>
    <h3>Message:</h3>
    <p>${req.body.message}</p>`

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: USER_EMAIL,
            pass: USER_PASS
        }
    });

    let mailOptions = {
        from: '"Contact" <nathanstone3000@gmail.com>',
        to: 'nathanstone3000@gmail.com',
        subject: 'New Message',
        text: 'Hello world?',
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send()
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
});

app.listen(SERVER_PORT, () => {
    console.log('Listening on:', SERVER_PORT)
})