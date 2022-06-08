const express = require("express");
const gameuserController = require("../controllers/gameuserController");
const historiesuserController = require("../controllers/historiesuserController");
const { Historiesuser, Gameuser } = require("../models");
const router = express.Router();

//Session home
router.get("/", (req, res) => {
  res.render("pages/home");
});
router.get("/home", (req, res) => {
  res.render("pages/home/index");
});

//Session Usergame
router.get("/gameusers", gameuserController.home);
router.post("/gameuser", gameuserController.store);
router.get("/gameusers/create", (req, res) =>
  res.render("pages/users/create", { pageTitle: "Create User" })
);
router.get("/gameusers/:id", gameuserController.show);
router.get("/gameusers/:id/edit", gameuserController.showUpdate);
router.put("/gameusers/:id", gameuserController.update);
router.delete("/gameusers/:id", gameuserController.destroy);

//Session Historygame
router.get("/histories", historiesuserController.home);
router.get("/histories/create", historiesuserController.create);
router.post("/histories", historiesuserController.store);

router.get("/histories/:id", historiesuserController.show);
router.get("/histories/:id/edit", historiesuserController.showUpdate);
router.put("/histories/:id", historiesuserController.update);
router.delete("/histories/:id", historiesuserController.destroy);

module.exports = router;
