const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) create a transporer
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // 2) Define Email options
  const emailOptions = {
    from: 'Eric Lien <eric@example.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3) send the email
  await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;