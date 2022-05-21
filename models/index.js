const User = require('./Users');
const Review = require('./Reviews');
const Items = require('./Items');


// create associations
User.hasMany(Review, {
  foreignKey: 'user_id'
});
Review.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Items, {
  foreignKey: 'user_id'
});

Items.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Review, Items };