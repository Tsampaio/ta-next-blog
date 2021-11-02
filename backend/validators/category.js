const { check } = require('express-validator');

// prettier-ignore
exports.categoryCreateValidator = [
  check("name")
      .not()
      .isEmpty()
      .withMessage('Name is required')
];
