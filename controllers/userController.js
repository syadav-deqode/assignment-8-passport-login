const userService = require('../services/userService')

module.exports.userListWithPage = async (req, res, next) => {
  const { users } = await userService.getUsers(req.body)
  res.render("users", { users });
}
