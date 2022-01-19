const db = require('../../data/db-config')

const getRecipeById = async recipe_id => {
    const rows = await db('recipes AS r')
        .where('recipe_id', recipe_id).first()
    return rows
}





module.exports = {
    getRecipeById
}








































