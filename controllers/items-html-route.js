// const router = require('express').Router();
// const { User, Items } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/',withAuth, (req, res) => {
//   console.log('======================');
//   Items.findAll({
//     attributes: [
//       'id', 'item_name', 'item_price', 'item_image', 'user_id'
//     ],
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(items => {
//       const itemsData = items.map(item => item.get({ plain: true }));
//       res.render('homepage', { itemsData });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


// module.exports = router;