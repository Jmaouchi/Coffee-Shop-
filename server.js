const express = require('express');
// const routes = require('./controllers');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// set up express handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// set code to use express-session and sequelize.store
// This code sets up an Express.js session and connects the session to our Sequelize database
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {}, // add maxAge: 900000  inside the cookies, to add a timer
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// use sessions
app.use(session(sess));

// use routes
app.use(routes);

// turn on connection to db and server // and force to true means that This allows the table to be overwritten and re-created
//if there is any changes
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port 3001 !'));
});