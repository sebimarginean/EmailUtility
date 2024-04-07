import sendEmailWithAttachments from "../utils/sendEmailWithAttachment.js";

export const applyToJob = async (req, res) => {
  const { name, email, phoneNumber } = req.body;
  const uploadedFiles = req.files;
  try {
    const send_to = process.env.EMAIL_USER;
    const sent_from = email;
    const reply_to = email;
    const attachments = uploadedFiles.map(file => ({
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      }));
    await sendEmailWithAttachments(
      name,
      phoneNumber,
      send_to,
      sent_from,
      reply_to,
      attachments
    );
    res.status(200).json({ success: true, message: "Email sent" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
