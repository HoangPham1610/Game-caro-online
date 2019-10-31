const passport = require('passport');
module.exports = authenUser = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user) => {
        if (err || !user) {
          res.json({"error": "Unauthorized"});
        }
        res.locals.user = user;
        
        next();
      })(req, res, next);
}

