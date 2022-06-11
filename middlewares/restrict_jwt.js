const passport = require("../lib/passport_jwt");
module.exports = passport.authenticate("jwt", {
  session: false,
});
