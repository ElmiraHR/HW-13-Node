const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Определяем схему Article
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag', // Связываем с моделью Tag
    },
  ],
});

// Создаём модель Article на основе схемы
const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
