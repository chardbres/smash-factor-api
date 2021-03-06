// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Shot = require('../models/shot.js')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
router.get('/shots', requireToken, (req, res, next) => {
  // Filters the response to include only shots for the incoming club ID
  Shot.find({ club: req.headers.id})
    .then(shots => {
      return shots.map(shot => shot.toObject())
    })
    .then(shots => res.status(200).json({ shots: shots }))
    .catch(next)
})
// ----------

// CREATE
router.post('/shots', requireToken, (req, res, next) => {
  req.body.shot.owner = req.user.id

  Shot.create(req.body.shot)
    .then(shot => {
      res.status(201).json({ shot: shot.toObject() })
    })
    .catch(next)
})
// ----------

// // SHOW
// router.get('', requireToken, (req, res, next) => {
//   Shot.findById(req.params.id)
//     .then(handle404)
//     .then(club => res.status(200).json({ club: club.toObject() }))
//     .catch(next)
// })
// // ----------
//

// // UPDATE
// router.patch('/shots/:id', requireToken, removeBlanks, (req, res, next) => {
//   delete req.body.club.owner
//
//   Shot.findById(req.params.id)
//     .then(handle404)
//     .then(club => {
//       requireOwnership(req, club)
//
//       return club.updateOne(req.body.club)
//     })
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })
// // ----------
//
// // DESTROY
// router.delete('/shots/:id', requireToken, (req, res, next) => {
//   Shot.findById(req.params.id)
//     .then(handle404)
//     .then(club => {
//       requireOwnership(req, club)
//       club.deleteOne()
//     })
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })
// // ----------

module.exports = router
