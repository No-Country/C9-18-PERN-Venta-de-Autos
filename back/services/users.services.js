const { encryptPassword, createJwt } = require('../helpers');
const Users = require('../models/users.model');

class UserServices {
  static async registerUser(body) {
    try {
      const { email, password, password2 } = body;

      let user = await Users.findOne({ where: { email } });

      if (user) {
        throw new Error('El usuario ya existe');
      }

      if (password !== password2) {
        throw new Error('Las contraseñas no coinciden');
      }

      user = new Users(body);
      // Encriptar password
      user.password = await encryptPassword(password);

      await user.save();

      // Generar JWT
      const payload = {
        userId: user.id,
        email: user.email,
        firstName: user.firstName,
      };
      const token = createJwt({ payload });
      return {
        user,
        token,
      };
    } catch (error) {
      throw error;
    }
  }

  static async findUsers() {
    try {
      return await Users.findAll({
        attributes: { exclude: ['password'] },
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
        attributes: { exclude: ['password'] },
      });

      if (!user) {
        throw new Error('Usuario no existe');
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, body) {
    try {
      const user = await Users.findOne({ where: { id } });

      if (!user) {
        throw new Error('User no encontrado');
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
        throw new Error('User no encontrado');
      }
      await user.destroy();

      return `Usuario ${id} eliminado`;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
