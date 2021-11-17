module.exports = {
  host: process.env.DB_HOST,
  name: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: +process.env.DB_PORT
}
