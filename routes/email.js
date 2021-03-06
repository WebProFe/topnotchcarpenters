//const keys = require('../config/keys');
const mongoose = require('mongoose');
const { check,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

mongoose.connect(process.env.mongoURI);
require('../models/email');
const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const Email = mongoose.model('emails');
// const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = app => {
    app.post('/send-email', [
        check('name').isLength({ min: 1 }).trim().withMessage('Name empty.'),
        check('email').isEmail().withMessage('email is invalid').normalizeEmail(),
        check('subject').isLength({ min: 1 }).trim().withMessage('subject is empty.'),
        check('message').isLength({min: 1}).trim().withMessage('message is empty'),

        
    ] ,(req, res) => {
        const errors = validationResult(req);
       
        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        
        new Email({
            from: req.body.name,
            emailAddress: req.body.email,
            subjectLine: req.body.subject,
            body: req.body.message,
            date: Date()
        })
        .save(function (err, doc) {
            if (err)
            res.json('Whoops! I\'m sorry, an error happened while sending your message. Please send a message directly to <a href="mailto:medina.techie@gmail.com">medina.techie@gmail.com');
            else
                res.send(`Thanks for reaching out ${req.body.name}!`);
        });

        console.log(req.body.email)
        console.log(process.env.emailAddress)
        console.log(req.body.emailAddress)

        const msg = {
        to: 'medina.techie@gmail.com',
        from: req.body.email,
        emailAddress: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
        html: `<h1>from: ${req.body.name}</h1>
               <p>${req.body.message}</p>`
        };
        sgMail.send(msg);

    });
}