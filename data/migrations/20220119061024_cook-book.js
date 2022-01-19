
exports.up = async function(knex) {
    await knex.schema
        .createTable('recipes', tbl => {
            tbl.increments()
            // tbl.string('')
        })
        .createTable('ingredients', tbl => {
            tbl.increments()
            // tbl.string('ingredients_id')
        })
        .createTable('steps', tbl => {
            tbl.increments()
            // tbl.string('')
        })
        .createTable('step_ingredients', tbl => {
            tbl.increments()
            // tbl.string('')
        })

};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')

};