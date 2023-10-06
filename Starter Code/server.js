const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");

const app = express();

// app.post("/api/recipes", (req, res) => {
//   console.log("hello world");
// });

// const whateverRouter = express.Router();
// whateverRouter.get("/api/recipes", (req, res) => {
//   console.log("hello world");
// });

// app.use(whateverRouter);

const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// Inform Express.js which template engine we're using
app.engine("handlebars", hbs.engine);
//This is telling express that the view engine is handlebars
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
app.use(homeRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});


