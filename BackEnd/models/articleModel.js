const Joi = require('joi');

const articleSchema = Joi.object({
  title: Joi.string().required(),
  header: Joi.string().required(),
  date: Joi.date().default(Date.now),
  author: Joi.string().required(),
  body: Joi.string().required(),
  photo: Joi.string().uri().allow(''),
});

const validateArticle = (data) => {
  return articleSchema.validate(data, { abortEarly: false });
};

module.exports = { validateArticle };