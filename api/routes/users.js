const express = express();
const router = express.Router();
const userController = require('../controllers/users');

router.post('/getUser', userController.getUser);

module.exports = router;