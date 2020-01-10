const cleaner = require('knex-cleaner');
// will prevent foreign key errors
// when trying to truncate the tables that have
// FK pointing to them
exports.seed = function (knex) {
  return cleaner.clean(knex, {
    mode: 'truncate',
    restartIdentity: true,
    ignoreTables: ['knex_migrations', 'knex_migrations_lock']
  });
  // after this command, all tables are empty
  // and all primary keys are reset
};