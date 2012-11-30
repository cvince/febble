console.log(process.env.DATABASE_URL);
module.exports = {
  ENV: process.env.NODE_ENV || 'local',

  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://apop:febble@dbh54.mongolab.com:27547/febble',

  SECRET_KEY: process.env.SECRET_KEY || 'secret',

  FACEBOOK: {
    clientID: 119496838210347,
    clientSecret: "ec4371d45063f97d1ef348e70159a033",
    callbackURL: "/auth/facebook/callback"
  }

};
