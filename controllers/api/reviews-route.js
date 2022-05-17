const router = require('express').Router();
const { User, Review } = require('../../models')
// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Review.findAll({
        attributes: [
            'id',
            'review_text',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbReviewData => res.json(dbReviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/:id', (req, res) => {
    // this will give us a sigle data object from the user table, where the id is = to the req.params.id
    Review.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'review_text',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// post a new review
router.post('/', (req, res) => {
    // in a post its always a create method that we need to use
    Review.create({
        review_text: req.body.review_text,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// delete a review
router.delete('/:id', (req, res) => {
    Review.destroy({
        where: { id: req.params.id }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;