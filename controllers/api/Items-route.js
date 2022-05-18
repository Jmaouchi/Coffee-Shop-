const router = require('express').Router();
const { User, Items } = require("../../models/");


// Get all items
router.get('/', async, (req, res) => {
    post.findAll({

        attributes: ['id', 'item_name', 'item_price', 'item_stock']

    })
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get one item by its ID
router.get('/:id', (req, res) => {
    post.findOne({

        where: {
            id: req.params.id
        },
        attributes: ['id', 'item_name', 'item_price', 'item_stock']
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
router.post('./Items', (req, res) => {

    try {

    const newItem = new Items({
        ...req.body,
        owner: req.user._id
    });
    await newItem.save()
    res.status(201).send(newIteem)
    } catch (error) {
        res.status(400).send({ message: 'error' });
    }
});

module.exports = router;