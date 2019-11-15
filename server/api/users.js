const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
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
    // const user = await User.findAll({
    //     where: {
    //       id: req.params.id
    //     }
    console.log('API ROUTE?!?!?!')
    // })
    const userId = req.user.id
    const updatedUser = await User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        company: req.body.company,
        position: req.body.position,
        residency: req.body.residency,
        jobDuties: req.body.jobDuties,
        related: req.body.related,
        timeElapsed: req.body.timeElapsed,
        ageAtCommit: req.body.ageAtCommit,
        serious: req.body.serious,
        rehab: req.body.rehab,
        safetyIssue: req.body.safetyIssue
      },
      {
        where: {
          id: userId
        }
      }
    )

    console.log('made it here!!!!')
    res.json(updatedUser)
  } catch (error) {
    console.error(error)
    next(error)
  }
})
