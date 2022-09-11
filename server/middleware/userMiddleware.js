
exports.isFilled = (req, res, next) => {

  const { first_name, last_name, email, phone } = req.body;

  if (!first_name) {
    return res.status(401).json({
      error: "First name must be filled in."
    })
  }
  if (!last_name) {
    return res.status(401).json({
      error: "Last name must be filled in."
    })
  }
  if (!email) {
    return res.status(401).json({
      error: "Email must be filled in."
    })
  }
  if (!phone) {
    return res.status(401).json({
      error: "Phone must be filled in."
    })
  }

  return next();
};
