exports.createValidator = (req, res, next) => {
  req.check('title', 'provide a title to the post').notEmpty();
  req.check('title', 'Title must be between 4  to 150 characters').isLength({
    min: 4,
    max: 150,
  });

  req.check('body', 'provide a body to the post').notEmpty();
  req.check('body', 'Body must be between 4  to 2000 characters').isLength({
    min: 4,
    max: 150,
  });

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};
