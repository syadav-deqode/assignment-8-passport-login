const User = require('../models/User')

module.exports.getAllUsers = async () => {
  const users = await User.findAll({})
  return { users }
}

module.exports.findOrCreateGoogleUser = async (googleId, options) => {
  const [user, created] = await User.findOrCreate({
    where: { googleId },
    defaults: options
  });

  return { user: user && user.dataValues ? user.dataValues : null, created }
}

module.exports.getUserByGoogleId = async (googleId) => {
  const user = await User.findOne({ where: { googleId } })
  return { user }
}
