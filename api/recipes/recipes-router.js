const router = require('express').Router();
const Recipe = require('./recipes-model')


router.get('/:recipe_id', (req, res, next) => {
    const { id } = req.params
    Recipe.getRecipeById(id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})




router.use((err, req, res, next) => {
    res.status(500)
        .json({
            error: err.message,
            stack: err.stack
        })

})

module.exports = router









































