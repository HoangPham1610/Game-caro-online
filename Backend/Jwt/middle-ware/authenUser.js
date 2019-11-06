const passport = require('passport');
module.exports = authenUser = (req, res, next) => {
    passport.authenticate('jwt', {session: true}, (err, user) => {
        if (err || !user) {
          res.json({"error": "Unauthorized"});
          console.log('Unauthorized user');
        }
        res.locals.user = user;
        
        next();
      })(req, res, next);
}

