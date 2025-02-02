const articleRepository = require('../repositories/articleRepository');
const { validateArticle } = require('../models/articleModel');

class ArticleService {
  async createArticle(articleData) {
    const { error } = validateArticle(articleData);
    if (error) throw new Error(error.details.map(d => d.message).join(', '));
    
    return articleRepository.create(articleData);
  }

  async getAllArticles() {
    return articleRepository.findAll();
  }

  async getArticleById(id) {
    const article = await articleRepository.findById(id);
    if (!article) throw new Error('Article not found');
    return article;
  }

  async updateArticle(id, articleData) {
    const { error } = validateArticle(articleData);
    if (error) throw new Error(error.details.map(d => d.message).join(', '));
    
    const article = await articleRepository.update(id, articleData);
    if (!article) throw new Error('Article not found');
    return article;
  }

  async deleteArticle(id) {
    const article = await articleRepository.findById(id);
    if (!article) throw new Error('Article not found');
    return articleRepository.delete(id);
  }
}

module.exports = new ArticleService();