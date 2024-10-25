const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Tag = require('./models/Tag');
const Article = require('./models/Article');

connectDB();

const testTagsArticles = async () => {
  // Создаем тег
  const tag = new Tag({ name: 'Technology' });
  await tag.save();

  // Создаем статью и связываем её с тегом
  const article = new Article({
    title: 'Advancements in AI',
    content: 'AI is growing rapidly...',
    tags: [tag._id], // Связываем с тегом
  });
  await article.save();

  // Обновляем тег с указанием статьи
  tag.articles.push(article._id);
  await tag.save();

  console.log('Данные успешно сохранены с отношением многие ко многим!');
};

testTagsArticles().then(() => mongoose.connection.close());
