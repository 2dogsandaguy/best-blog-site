const sequelize = require('../config/connection');
const { User, BlogPost, Comments } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./BlogPost.json');
const CommentsData = require('./comment.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogPostData) {
    await BlogPost.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  const postComments= await Comments.bulkCreate(CommentsData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
