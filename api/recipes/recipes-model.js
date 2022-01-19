const db = require('../../data/db-config.db')

const getRecipeById = id => {
    return db('recipes').where('recipe_id', id).first()

}





module.exports = getRecipeById








































