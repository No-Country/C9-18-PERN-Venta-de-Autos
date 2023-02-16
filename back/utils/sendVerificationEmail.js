const sendEmail = require("./sendMail");

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmail = `${origin}/users/verify?token=${verificationToken}&email=${email}`;

  const message = `
    <p>
        Por favor confirme su email haciendo click en el siguiente enlace
        <a href="${verifyEmail}">Verificar email</a>
    </p>
  `;

  return sendEmail({
    to: email,
    subject: "Verificar email",
    html: `Hola ${name}, ${message}`,
  });
};

module.exports = sendVerificationEmail;
