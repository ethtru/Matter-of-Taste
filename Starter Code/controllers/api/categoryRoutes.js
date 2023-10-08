router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });
    console.log(categories);
    res.render("category", { categories });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
