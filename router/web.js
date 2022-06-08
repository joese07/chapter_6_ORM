const express = require("express");
const gameuserController = require("../controllers/web/gameuserController");
const historiesuserController = require("../controllers/web/historiesuserController");
const restrict = require("../middlewares/restrict");

const router = express.Router();

//Session home
router.get("/", (req, res) => {
  res.render("pages/home");
});
router.get("/home", (req, res) => {
  res.render("pages/home/index");
});

//Session Usergame
router.get("/gameusers", restrict, gameuserController.home);
router.post("/gameuser", gameuserController.store);
router.get("/gameusers/create", restrict, (req, res) =>
  res.render("pages/users/create", { pageTitle: "Create User" })
);
router.get("/gameusers/:id", restrict, gameuserController.show);
router.get("/gameusers/:id/edit", restrict, gameuserController.showUpdate);
router.put("/gameusers/:id", gameuserController.update);
router.delete("/gameusers/:id", gameuserController.destroy);

//Session Historygame
router.get("/histories", restrict, historiesuserController.home);
router.get("/histories/create", restrict, historiesuserController.create);
router.post("/histories", historiesuserController.store);

router.get("/histories/:id", restrict, historiesuserController.show);
router.get("/histories/:id/edit", restrict, historiesuserController.showUpdate);
router.put("/histories/:id", historiesuserController.update);
router.delete("/histories/:id", historiesuserController.destroy);

module.exports = router;
