const joi = require('joi');

const shema = joi.object({
  name: joi.string().min(5).required(),
  quantity: joi.number().min(1).required(),

}).messages({
  'any.': '{{#label}} is required',
  'any.l': '{{#label}} length must be at least 5 characters long',
  'number.': '{{#label}} must be greater than or equal to 1',
});

module.exports = shema;