
const router = require('express').Router();
const sequelize = require('../../config/connection');

const { Items, Reviews, Users } = require('../../models');

router.get('/', (req, res) => {

    Items.findAll({

        attributes: ['id', 'item_name', 'item_price', 'item_stock'],
        order: [['item_price', 'DESC']],

        include: [
            {
                model: Users,
            }
        ]
    })
})