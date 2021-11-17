const userRepository = require('../repositories/userRepository')

module.exports.getUsers = async () => {
  const { users } = await userRepository.getAllUsers()
  return { users }
}
