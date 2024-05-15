
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import url from 'url';

export async function GET(req) {
  const { query } = url.parse(req.url, true);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: process.env.EMAIL_USER, // list of receivers
    subject: 'Contact Form Message', // Subject line
    text: `Name: ${query.name}\nEmail: ${query.email}\nPhone: ${query.phone}\nMessage: ${query.message}`, // plain text body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
    // Return a 'Thank You' message with a link to go back and style the thank you message
    return NextResponse.redirect('https://www.thefitnessarchives.com/thankYou'); 

  } catch (error) {
    console.log(error);
    return new NextResponse('Failed to send email', { status: 500 });
  }
};