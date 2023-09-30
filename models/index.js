const User = require('./User');
const Comments = require('./Comments')
const BlogPost = require('./BlogPost');

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
BlogPost.hasMany(Comments, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});
BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});
Comments.belongsTo(User, {
  foreignKey: 'user_id'
});
Comments.belongsTo(BlogPost, {
  foreignKey: 'blog_id'
});

module.exports = { User, Comments, BlogPost};
