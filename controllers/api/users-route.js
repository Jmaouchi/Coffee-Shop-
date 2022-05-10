const router = require('express').Router();
const { User } = require('../../models')


// send all the data using this api endpoint, and exclude the password from the response 
router.get('/', (req, res) => {

  User.findAll({
    // exclude password
    attributes: { exclude: ['password'] }
  })
  // then send the data to the user as json 
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// check the users login infos
router.post('/login', (req, res) => {
  User.findOne({

    where: {
      email: req.body.email
    }
    
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
    //since the password is hashed, we can not check it, cause it will be different in the database
    // what we need to id is to run a function called checkPasswod and then call  bcrypt.compareSync method to hash the password and then compare
    // it, if its the same, then login 
    // this function is in the user table 
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    // this will send them a message that they are logged in and the a json data that only has a user name 
    res.json({ user: dbUserData.username , message: 'You are now logged in!' });
  });
});


// find a user by id 
router.get('/:id', (req, res) => { 
  // this will give us a sigle data object from the user table, where the id is = to the req.params.id
  User.findOne({
    attributes: { exclude: ['password'] },
      where: {
         id: req.params.id
      },
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