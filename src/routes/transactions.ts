/* eslint-disable prettier/prettier */
import { FastifyInstance } from 'fastify'
import { knex } from 'knex'

export async function transactionsRoutes(app: FastifyInstance) {

  app.get('/getTransactions', async () => {
    const transactions = await knex('sqlite_schema').select('*')
    
    return transactions
  })
}
