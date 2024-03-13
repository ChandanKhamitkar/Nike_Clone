import nodeMailer from "nodemailer";
import mailgen from "mailgen";
import dotevn from "dotenv";
dotevn.config();


async function sendEmail(OTP, email) {
  console.log(`Email got for email.js ${email}`);
  try {
    const cred = {
      service : "gmail",
      auth : {
        user : process.env.SENDER_MAIL,
        pass : process.env.SENDER_PASS 
      }
    }
    
    let transporter = nodeMailer.createTransport(cred);
    
    let MailGenerator = new mailgen({
      theme : "default",
      product : {
        name : "Mailgen",
        link : "https://mailgen.js"
      }
    })
    
    let response = {
      body : {
        name : "Your Nike Member Profile code",
        intro : `Here's the one-time verification code you requested: ${OTP}`,
        outro : "Nike"
      }
    }
    
    let mail = MailGenerator.generate(response);
    
    let message = {
      from : process.env.SENDER_MAIL,
      to : email,
      subject : "Nike Member OTP",
      html : mail
    }
    
    await transporter.sendMail(message)
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }

}

export { sendEmail };