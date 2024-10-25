const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Publisher = require('./models/Publisher');
const Magazine = require('./models/Magazine');

connectDB();

const testModels = async () => {
  // Создаем издателя
  const publisher = new Publisher({ name: 'Example Publisher', location: 'New York' });
  await publisher.save();

  // Создаем журнал и связываем его с издателем
  const magazine = new Magazine({
    title: 'Tech Monthly',
    issueNumber: 42,
    publisher: publisher._id,
  });
  await magazine.save();

  console.log('Данные успешно сохранены!');
};

testModels().then(() => mongoose.connection.close());
