"use server";

const nodemailer = require('nodemailer');

module.exports = (req, res) => {
  const { _name, email, _phone, message } = req.body;

  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${_name}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${_phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // replace with your email
      pass: process.env.EMAIL_PASS // replace with your password
    }
  });

  let mailOptions = {
    from: 'colbygattycreates@gmail.com', // sender address
    to: process.env.EMAIL_USER, // list of receivers
    subject: 'Fitness Archives Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', {msg:'Email has been sent'});
  });
};