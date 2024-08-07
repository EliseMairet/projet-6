const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const bookCtrl = require('../controllers/book.js');

router.get('/', bookCtrl.getAllBook);
router.post('/', auth, multer, bookCtrl.createBook);
router.get('/:id', auth, bookCtrl.getOneBook);
router.put('/:id', auth, multer, bookCtrl.updateOneBook);
router.delete('/:id', auth, bookCtrl.deleteOneBook);
router.get('/bestrating', bookCtrl.bestRating);

module.exports = router;
