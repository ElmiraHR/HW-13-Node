const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Определяем схему Tag
const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Article', // Связываем с моделью Article
    },
  ],
});

// Создаём модель Tag на основе схемы
const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;
