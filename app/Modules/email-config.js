var nodemailer = require('nodemailer');
const user_email_service = 'gmail' //yahoo,gmail and etc
const user_email = 'obccreativecontent@gmail.com';

var transporter = nodemailer.createTransport({
    service: user_email_service,
    auth: {
          type: "OAuth2",
          user: user_email,
          clientId:"5901670294-p8f7bv6cl0pnj4bq6m2u16mntqkc0e0t.apps.googleusercontent.com",
          clientSecret:"tIIN0ry1nPGhEcFL4SjKD2Um",
          refreshToken: "1//04HDMCwIzBpqVCgYIARAAGAQSNwF-L9Ir3PyNvg6jq3RX4ZlZhjDgHIR69FZCZREPIDZ7ZQQO_yxFQIU0MbraOxBtuTEdwtk4Ud0",
          accessToken: "ya29.Il_AB6eVzcqeUFstqYPabjT4oSHAemjkC6--ewKpLhQMyHT5Hn7sLR0nJ7D1RR4rDNpv7RRDfFUZ4BsN_aadZja-QfDGlQ-uFWpTAcCN1xXUGmInJoxfqQ331YuMPZIyfg"
    }
});

module.exports = transporter