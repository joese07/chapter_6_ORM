const { Room, Gameuser } = require("../../models");

module.exports = {
  createRoom: (req, res) => {
    Room.create({
      name_room: req.body.room_name,
    }).then(() => {
      res.redirect("/arena/dashboard");
    });
  },

  showRoom: async (req, res) => {
    const user = Gameuser.authenticate(req.username);
    const { name } = user;
    console.log(name);
    const room = await Room.findAll();
    try {
      res.render("pages/game/dashboard", { room, name });
    } catch (err) {
      next(err);
    }
  },

  arenaRoom: async (req, res) => {
    const roomid = await Room.findOne({ where: { id: req.params.id } });
    const { name_room } = roomid;
    try {
      res.render("pages/game/arena", { name_room });
    } catch (err) {
      next(err);
    }
  },

  playgame: async (req, res) => {},
};
