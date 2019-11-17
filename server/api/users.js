const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: {
        id: req.params.id
      }
    })
    if (!user) {
      res
        .status(404)
        .send(
          "Sorry- it seems like you haven't registered with us yet. Please sign up!"
        )
    }
    res.json(user)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.put('/checklist', async (req, res, next) => {
  try {
    const userId = req.user.id
    const updatedUser = await User.update(req.body, {
      where: {id: userId},
      returning: true
    })
    res.json(updatedUser)
    //res.json(updatdUser[1][0])
  } catch (error) {
    console.error(error)
    next(error)
  }
})
