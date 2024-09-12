const { clean } = require('knex-cleaner')

exports.seed = function (knex) {
    return clean(knex, {
        mode: 'truncate',
        ignoreTables: ['knex_migrations, knex_migrations-lock']
    })
}

// const cleaner = require('knex-cleaner');
//
// exports.seed = function(knex) {
//     return cleaner.clean(knex, {
//         mode: 'truncate', // resets ids
//         ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
//     });
// };













































