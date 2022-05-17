const User = require('./Users');
const Review = require('./Reviews')

// create associations
User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


module.exports = { User, Review };
// const Items = require('./Items');
// const Reviews = require('./Reviews');

// // Starting to build associations

// User.hasMany(Items, {
//     foreignKey: 'user_id'
// });

// User.hasMany(Reviews, {
//     foreignKey: 'user_id'
// });

// Items.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Don't forget to export all the models defined above
//module.exports = { User };
