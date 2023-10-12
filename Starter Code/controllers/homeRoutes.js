const router = require("express").Router();


router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("homepage");
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
