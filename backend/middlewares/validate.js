const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (e) {
    console.error(e.errors); // Log validation errors for debugging
    return res.status(400).json({ error: e.errors });
  }
};

module.exports = validate;
