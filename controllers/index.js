// link to express package
var express = require('express');

// instantiate new express router to handle http requests
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Portfolio' });
});

/* GET /about */
router.get('/about', (req, res, next) => {
  res.render('about', {title: 'About Me', message: 'I program the computers making stuff such as this website.'});
})

/* GET /projects */
router.get('/projects', (req, res, next) => {
  res.render('projects', {title: 'My Projects', message: 'This website is one of my projects.'});
})

/* GET /contact */
router.get('/contact', (req, res, next) => {
  res.render('contact',
      {title: 'Contact Info',
      name: 'Joshua George',
      email: 'jhgeorg1@lakeheadu.ca',
      phone: '416-206-2778'}
      );
})

// expose this file as public
module.exports = router;
