import sendEmail from "../utils/sendEmail.js";

export const contact = async (req, res) => {
  const { email, subject, message } = req.body;
  try {
    const send_to = process.env.EMAIL_USER;
    const sent_from = email;
    const reply_to = email;
    await sendEmail(subject, message, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email sent" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
