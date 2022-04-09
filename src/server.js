var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
// const creds = require('./config');
// const { getDefaultNormalizer } = require('@testing-library/react');

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)


const contactEmail = nodemailer.createTransport({
    host: 'gmail',
    // port: 587,
    auth: {
        user: 'debleehall15@gmail.com',
        pass: 'Disneyfan92'
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/contact', (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
    // var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
        from: name,
        to: 'debleehall15@gmail.com',
        subject: subject,
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: error });
        } else {
            res.json({ status: "message sent" })
        }
    });
});
