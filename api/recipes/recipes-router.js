const router = require('express').Router();
const Recipes = require('./recipes-model')


router.get('/', (req, res, next) => {
    console.log('get recipe')
})




router.use((err, req, res, next) => {
    res.status(500)
        .json({
            error: err.message,
            stack: err.stack
        })

})

module.exports = router









































