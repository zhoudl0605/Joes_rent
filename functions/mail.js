require('dotenv').config()
const nodemailer = require('nodemailer')

async function main (Data, callback) {
  let transporter = nodemailer.createTransport({
    host: 'mail.hyperoptimal.ca',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAILER_EMAIL, // generated ethereal user
      pass: process.env.PASSWORD // generated ethereal password
    }
  })
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${Data.name}" <mailer@hyperoptimal.ca>`, // sender address
    to: `${process.env.WEBSITE_RECEIVER}, ${Data.email}`, // list of receivers
    subject: Data.subject, // Subject line
    text: Data.text, // plain text body
    html: Data.html // html body
  })

  console.log('Message sent: %s', info.messageId)
  callback(null, {
    statusCode: 200,
    body: info.messageId + process.env.WEBSITE_RECEIVER
  })
}
exports.handler = function (event, context, callback) {
  if (event.httpMethod === 'POST') {
    let Data = JSON.parse(event.body)
    main(Data, callback).catch((err) => {
      callback(null, {
        statusCode: 500,
        body: 'Error has occured ' + err
      })
    })
  } else {
    console.log('only post is allowed')
    callback(null, {
      statusCode: 401,
      body: 'forbidden'
    })
  }
}
