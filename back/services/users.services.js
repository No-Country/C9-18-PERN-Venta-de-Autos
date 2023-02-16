const { encryptPassword, createJwt } = require("../helpers");
const { ErrorObject } = require("../helpers/error");
const Users = require("../models/users.model");
const crypto = require("crypto");
const sendVerificationEmail = require("../utils/sendVerificationEmail");
const { Op, or } = require("sequelize");

class UserServices {
  static async registerUser(body) {
    try {
      const { email, phone } = body;

      body.password = await encryptPassword(body.password);
      body.verificationToken = crypto.randomBytes(40).toString("hex");

      const [response, created] = await Users.findOrCreate({
        where: { [Op.or]: [{ email }, { phone }] },
        defaults: body,
      });

      delete response.dataValues.password;

      return [response, created];
    } catch (error) {
      throw error;
    }

    // try {
    //   const { email, password, password2 } = body;

    //   let user = await Users.findOne({ where: { email } });

    //   if (user) {
    //     throw new Error("El usuario ya existe");
    //   }

    //   if (password !== password2) {
    //     throw new Error("Las contraseñas no coinciden");
    //   }

    //   const verificationToken = crypto.randomBytes(40).toString("hex");

    //   user = new Users(body);
    //   // Encriptar password
    //   user.password = await encryptPassword(password);

    //   user.verificationToken = verificationToken;

    //   await user.save();

    //   const origin = "http://localhost:5000";
    //   await sendVerificationEmail({
    //     name: user.firstName,
    //     email: user.email,
    //     verificationToken: user.verificationToken,
    //     origin,
    //   });

    //   // Generar JWT
    //   const payload = {
    //     userId: user.id,
    //     email: user.email,
    //     firstName: user.firstName,
    //   };
    //   const token = createJwt({ payload });
    //   return {
    //     user,
    //     token,
    //   };
    // } catch (error) {
    //   console.log(error);
    //   throw error;
    // }
  }

  static async findUsers() {
    try {
      return await Users.findAll({
        attributes: { exclude: ["password"] },
      });
    } catch (error) {
      throw error;
    }
  }

  static async findUserById(id) {
    try {
      console.log(id);

      const user = await Users.findOne({
        where: { id },
        attributes: { exclude: ["password"] },
      });

      if (!user) {
        throw new Error("Usuario no existe");
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async findUserByEmail(email) {
    try {
      const user = await Users.findOne({
        where: { email },
        attributes: { exclude: ["password"] },
      });

      if (!user) throw new Error("Usuario no existe");

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, body) {
    try {
      const user = await Users.findOne({ where: { id } });

      if (!user) {
        throw new Error("User no encontrado");
      }

      await user.update(body);

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const user = await Users.findOne({ where: { id } });
      if (!user) {
        throw new Error("User no encontrado");
      }
      await user.destroy();

      return `Usuario ${id} eliminado`;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
