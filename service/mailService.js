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

  try {
    const response = await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
    // L'e-mail a été envoyé avec succès, et vous pouvez accéder à la réponse ici.
    console.log("E-mail envoyé :", response);
  } catch (error) {
    // Gérer les erreurs éventuelles survenues lors de l'envoi de l'e-mail.
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    console.log("NODEMAILER_EMAIL", process.env.NODEMAILER_EMAIL);
    console.log("NODEMAILER_PW", process.env.NODEMAILER_PW);
    throw new Error("Email sending failed");
  }
}
