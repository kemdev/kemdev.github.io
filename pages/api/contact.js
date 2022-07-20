// The toturial for this is here; https://dev.to/kennymark/how-to-send-serverless-emails-with-next-js-and-sengrid-40lj
import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default async (req, res) => {
  const { email, phone, message, firstName, lastName } = req.body;
  const name = firstName + ' ' + lastName;
  const msg = {
      to: "abdulkarim.alarmanazi@gmail.com",
    //   from: email,
      from: 'abdulkarim.alarmanazi@gmail.com',
      name,
      subject: "New Message from " + name,
      phone,
      text: message,
    };
    
    try {
    //   console.log(msg);
    await sgMail.send(msg);
    res.json({ success: true, message: `Message has been sent` });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error sending email, please try again later!", error: error });
  }
};
