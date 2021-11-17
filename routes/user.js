'use strict'
const express = require('express')
const router = express.Router()

const asyncHandler = fn => (req, res, next) => {
  return Promise
    .resolve(fn(req, res, next))
    .catch(next)
}

const userController = require('../controllers/userController')
const { ensureAuth } = require('../middlewares/auth')

router.get('/list/user-list', ensureAuth, asyncHandler(userController.userListWithPage))

module.exports = router
