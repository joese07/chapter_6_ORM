const { Room } = require('../../models');

module.exports = {
    createRoom: (req, res) => {
        Room.create({
            name_room: req.body.room_name,
        }).then(() =>{
            res.redirect("/arena/dashboard");
        });
    },

    showRoom: (req, res) => {
        Room.findAll({
            order: [["name_room","ASC"]],
          }).then((room)=> {
            res.render("pages/game/dashboard", { pageTitle: "Main Room", room });
          })
    },

    arenaRoom: (req, res) => {
        res.render("pages/game/arena", { pageTitle: "arena Game"});
    }
}