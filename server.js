const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors')
const bodyParser = require('body-parser');


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
       
    }
})


transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n message: ${message} `

    const mailOptions = {
        from: name,
        to: 'ipsita.rao@gmail.com',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mailOptions, (err) => {
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
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use('/', router)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))