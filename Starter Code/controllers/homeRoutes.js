const router = require("express").Router();
const Category = require("../models/Category");

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("homepage");
});

router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll({raw: true});
    console.log(categories);
    res.render("category", { categories });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
