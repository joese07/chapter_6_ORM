const express = require("express");
const gameuserController = require("../controllers/gameuserController");
const { Historiesuser, Gameuser } = require("../models");
const router = express.Router();

//Session login

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

// //Session Historygame
// router.get("/histories/create", (req, res) => {
//   Gameuser.findAll().then((gamesuser) => {
//     res.render("pages/history/create", {
//       pageTitle: "Buat Histori Games",
//       gamesuser,
//     });
//   });
// });

// router.get("/histories", (req, res) => {
//   const alertSuccess = req.flash("alertSuccess");

//   Historiesuser.findAll({
//     include: ["gameuser"],
//   }).then((historiusers) => {
//     res.render("pages/history/index", {
//       pageTitle: "Daftar table History",
//       historiusers,
//       alertSuccess,
//     });
//   });
// });

// router.get("/histories/:id", (req, res) => {
//   Historiesuser.findOne({
//     where: { id: req.params.id },
//   }).then((historiuser) => {
//     res.render("pages/history/detail", {
//       pageTitle: `History Game`,
//       historiuser,
//     });
//   });
// });

// router.post("/histories", (req, res) => {
//   let joinDate;
//   if (!req.body.joinDate) {
//     joinDate = null;
//   } else {
//     joinDate = req.body.joinDate;
//   }

//   Historiesuser.create({
//     idgameuser: req.body.id_user,
//     nameOfGame: req.body.nama_game,
//     level: req.body.level,
//     joinDate,
//   }).then(() => {
//     req.flash("alertSuccess", "Berhasil membuat Histori game user");
//     res.redirect("/histories");
//   });
// });

// router.get("/histories/:id/edit", (req, res) => {
//   Historiesuser.findOne({
//     where: { id: req.params.id },
//   }).then((historiuser) => {
//     res.render("pages/history/edit", {
//       pageTitle: "Edit Data histori",
//       historiuser,
//     });
//   });
// });

// router.put("/histories/:id", (req, res) => {
//   let joinDate;
//   if (!req.body.joinDate) {
//     joinDate = null;
//   } else {
//     joinDate = req.body.joinDate;
//   }

//   Historiesuser.update(
//     {
//       idgameuser: req.body.id_user,
//       nameOfGame: req.body.nama_game,
//       level: req.body.level,
//       joinDate,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   ).then(() => {
//     req.flash("alertSuccess", "Berhasil mengubah data ");
//     res.redirect("/histories");
//   });
// });

// router.delete("/histories/:id", (req, res) => {
//   Historiesuser.destroy({
//     where: {
//       id: req.params.id,
//     },
//   }).then(() => {
//     req.flash("alertSuccess", "berhasil hapus data");
//     res.redirect("back");
//   });
// });

module.exports = router;
