import nodeMailer from "nodemailer";

export const sendMail = async (req, res) => {
  let testAccount = await nodeMailer.createTestAccount();
  const transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ardella.ritchie@ethereal.email",
      pass: "PnVuqufkm631jYQ1cU",
    },
  });

  let info = await transporter.sendMail({
    from: '"human iron" <helper@gmail.com>',
    to: "ra@gmail.com",
    subject: "Hello world",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
  console.log("Message sent: %s", info.messageId);
  res.json(info);
  //   res.send("Ikfjldjfl");
};
