const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const { v4: uuidv4 } = require("uuid");
const router = require("./router");
const { Adminuser } = require("./models");
const req = require("express/lib/request");

const PORT = 8080;

const app = express();

app.use(methodOverride("_method"));

// Accepting Input
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set cookie parser, session and flash
app.use(cookieParser("NotSoSecret"));
app.use(
  session({
    secret: uuidv4(),
    cookie: { maxAge: 6000 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Static files
app.use(express.static("public"));

app.get("/login", (req, res) => {
  const alertSuccess = req.flash("alertSuccess");
  res.render("login/login", { alertSuccess });
});

app.post("/login", (req, res) => {
  const email = "joese@gmail.com";
  const password = "admin123";

  if (req.body.email === email && req.body.password === password) {
    req.session.user = req.body.email;
    res.redirect("/");
  } else {
    res.end(" invalid email or password ");
  }
});

app.get("/signup", (req, res) => {
  res.render("login/signup");
});

app.post("/signup", (req, res) => {
  Adminuser.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then((admin) => {
    req.flash("alertSuccess", "Daftar Admin Berhasil, Silahkan Login");
    res.redirect("/login");
  });
});

// Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/app");
app.set("view engine", "ejs");

// Middleware to pass `url` to locals variable so we can use it on view
app.use((req, res, next) => {
  res.locals.url = req.originalUrl;
  next();
});

// Router
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/home`);
});
