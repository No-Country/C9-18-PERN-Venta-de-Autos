const express = require('express');
const {
  register,
  getAll,
  getId,
  update,
  deleteUser,
  verifyUser
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

router.post('/register', register);

router.get('/all', getAll);

router.get('/:id', getId);

router.put('/edit/:id', update);

router.delete('/delete/:id', deleteUser);

router.post('/verify', verifyUser)

module.exports = router;
