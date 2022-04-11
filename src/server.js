var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

var transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'debleehall15@gmail.com',
        pass: 'zhwyyefbbnexlvwb'
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `

    var mail = {
        from: name,
        to: 'debleehall15@gmail.com',
        subject: subject,
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)
