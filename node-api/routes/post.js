const express = require('express');
const { getPosts, createPost } = require('../controllers/post');
const { createValidator } = require('../validator/index');

const router = express.Router();
router.get('/', getPosts);
router.post('/post', createValidator, createPost);

// const getPosts = (req, res) => {
//   res.send('Hello world from node js');
// };

// module.exports = { getPosts };

module.exports = { router };
