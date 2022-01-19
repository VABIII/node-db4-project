// const db = require('../../data/db-config.db')

const getRecipeById = recipe_id => {
    // return db('recipes').where('recipe_id', id).first()
    return Promise.resolve(`Awesome recipe with id of ${recipe_id}`)
}





module.exports = {
    getRecipeById
}








































