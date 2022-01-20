require('dotenv').config()

const server = require('./api/server')


const port = process.env.PORT

server.listen(port, () => {
    console.log(`**** Server running on port ${port} ****`)
})





// -- Ingredients and steps query
// SELECT * FROM step_ingredients AS si
// JOIN ingredients i on i.ingredient_id = si.ingredient_id
// JOIN steps s on s.step_id = si.step_id
// WHERE s.recipe_id = 1;
//
// -- Steps and Recipe query
// SELECT * FROM steps s
// JOIN recipes AS r ON r.recipe_id = s.recipe_id
// WHERE r.recipe_id = 1
// ORDER BY s.step_number
// ;






































