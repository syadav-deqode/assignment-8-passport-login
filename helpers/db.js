const { Sequelize } = require('sequelize')
const { host, name, username, password, port } = require('../config/database')

let sequelize = new Sequelize(name, username, password,
  {
    host, port,
    dialect: 'mysql'
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('[Sequelize] Connection Successful')
  })
  .catch((err) => {
    console.log(`'[Sequelize] [authenticate] Some Error Occurred'`, err)
  })

module.exports = sequelize
