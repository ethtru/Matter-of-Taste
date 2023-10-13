const router = require("express").Router();

router.get("/", async (req, res) => {
  let loggedIn = false
  console.log (req.session);
  if (req.session.loggedIn) {
    loggedIn = true
    console.log ("we are logged in");
  }
  res.render("homepage", {loggedIn: !!req.session.loggedIn});
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
