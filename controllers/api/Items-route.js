// Add an item

const res = require("express/lib/response");
const router = require(".");
const Items = require("../../models/Items");



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