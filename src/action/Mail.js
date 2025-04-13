"use server"

export async function sendmail(formdata){

  console.log("function is trigering")
    const email = formdata.get("email");
    const name = formdata.get("name");
    const message = formdata.get("message");
    const number = formdata.get("number");

     let transporter = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          port: 465,
          secure: false,
          auth: {
            user: "ajmalshahan23@gmail.com", // Your email app password
            pass: "omrd xkgi yhed oglo",  
          },
        });
    
        let mailOptions = {
          from: email,
          to: "officialzedro@gmail.com",
          subject: `Mail from ${email}`,
          text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`,
        };
    
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");


}