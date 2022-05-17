
const router = require('express').Router();
const sequelize = require('../../config/connection');

const { Items, Reviews, Users } = require('../../models');

// GET all items
router.get('/', (req, res) => {

    Items.findAll({

        attributes: ['id', 'item_name', 'item_price', 'item_stock'],
        order: [['item_price', 'DESC']],

        include: [
            {
                model: Users,
            }
        ]
    });
});

// GET item by its ID
router.get('/:id', (req, res) => {

    Items.findOne({

        where: {
            id: req.params.id
        },  

        attributes: ['id', 'item_name', 'item_price', 'item_stock'],

        include: [
            {
                model: Users,
                attributes: ['username']
            }
        ]
    })
    .then(dbItemData => {
        if (!dbItemData) {
            res.status(404).json({ message: 'No item with that ID exists, try again.'});
            return;
        }
        res.json(dbItemData);
    });
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});