'use strict'

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: process.env.WRITER_MYSQL_HOST,
      user: process.env.WRITER_MYSQL_USER,
      port: process.env.WRITER_MYSQL_PORT,
      password: process.env.WRITER_MYSQL_PASS,
      database: 'main'
  },
  pool: {
    min: 1,
    max: 4,
  },
});

const getTransaction = async () => {

    const transaction = await knex.transaction()

    return {transaction};
}

const commitTransaction = ({ transaction }) => transaction.rollback();

const rollbackTransaction = ({ transaction }) => transaction.rollback();

module.exports = { getTransaction, commitTransaction, rollbackTransaction, client: knex };
