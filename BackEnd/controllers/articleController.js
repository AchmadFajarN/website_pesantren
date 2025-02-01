const articleService = require('../services/articleService');
const errorHandler = require('../utils/errorHandler');

const articleController = {
  createArticle: async (req, res) => {
    try {
      const newArticle = await articleService.createArticle(req.body);
      res.status(201).json(newArticle);
    } catch (error) {
      errorHandler(error, req, res);
    }
  },

  getAllArticles: async (req, res) => {
    try {
      const articles = await articleService.getAllArticles();
      res.json(articles);
    } catch (error) {
      errorHandler(error, req, res);
    }
  },

  getArticleById: async (req, res) => {
    try {
      const article = await articleService.getArticleById(req.params.id);
      res.json(article);
    } catch (error) {
      errorHandler(error, req, res);
    }
  },

  updateArticle: async (req, res) => {
    try {
      const updatedArticle = await articleService.updateArticle(
        req.params.id,
        req.body
      );
      res.json(updatedArticle);
    } catch (error) {
      errorHandler(error, req, res);
    }
  },

  deleteArticle: async (req, res) => {
    try {
      await articleService.deleteArticle(req.params.id);
      res.status(204).end();
    } catch (error) {
      errorHandler(error, req, res);
    }
  },
};

module.exports = articleController;