const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Определяем схему Magazine
const MagazineSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  issueNumber: {
    type: Number,
    required: true,
  },
  publisher: {
    type: Schema.Types.ObjectId, // Связываем с моделью Publisher
    ref: 'Publisher',
    required: true,
  },
});

// Создаём модель Magazine на основе схемы
const Magazine = mongoose.model('Magazine', MagazineSchema);

module.exports = Magazine;
