const router = require('express').Router();
// const { DataTypes } = require('sequelize/types');
const { Items, User } = require('../../models/');

// Get all items
router.get('/', (req, res) => {
  Items.findAll({
    attributes: ['id', 'item_name', 'item_price', 'item_image', 'user_id'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get one item by its ID
router.get('/:id', (req, res) => {
  Items.findOne({

    where: {
      id: req.params.id
    },
    attributes: ['id', 'item_name', 'item_price', 'item_image', 'user_id'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbItemData => {
      if (!dbItemData) {
        res.status(404).json({ message: 'No item exists with that ID, try again.' });
        return;
      }
      res.json(dbItemData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Add an item to the store
router.post('/', (req, res) => {
  // in a post its always a create method that we need to use
  Items.create({
    item_name: req.body.item_name,
    item_price: req.body.item_price,
    item_image: req.body.item_image,
    user_id: req.session.user_id
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.delete('/:id', (req, res) => {
  Items.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbItemData => {
      if (!dbItemData) {
        res.status(404).json({ message: 'No item exists with that ID, try again.' });
        return;
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;