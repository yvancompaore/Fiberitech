var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, fromEmail, otpText) {
  console.log(process.env.NODEMAILER_EMAIL);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: fromEmail,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: otpText,
  };

  /*await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.log(err);
        return false;
        //reject(err);
      } else {
        console.log("emaim sent " + info.response);
        return true;
      }
    });
  });*/

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent");
    }
  });
}
