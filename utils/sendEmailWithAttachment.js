import nodemailer from "nodemailer";

const sendEmailWithAttachments = async (
  name,
  phoneNumber,
  send_to,
  sent_from,
  reply_to,
  attachments
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: name,
    html: `<h2>Nume: ${name}</h2><br>
        <h2>Email: ${sent_from}</h2><br>
        <h2>Numar de telefon: ${phoneNumber}</h2>
        `,
    attachments,
  };

  await transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

export default sendEmailWithAttachments;
