const express = require('express');
const { login } = require('../controllers/auth.controller');
const {
  register,
  getAll,
  getId,
  update,
  deleteUser,
} = require('../controllers/user.controller');

const router = express.Router();

/**
 * http://localhost:3000/users ......
 * 
 *  Register example
 * 
 * {
        "fristName": "Juan",
        "lastName": "Perez",
        "email": "juancito@gmail.com",
        "profileImage": "https://unsplash.com/photos/b5JksapY8pM",
        "phone": "543596584035",
        "password": "123456",
        "password2": "123456"
    }
 * 
 */

router.post('/login', login)

router.post('/register', register);

router.get('/all', getAll);

router.get('/:id', getId);

router.put('/edit/:id', update);

router.delete('/delete/:id', deleteUser);

module.exports = router;