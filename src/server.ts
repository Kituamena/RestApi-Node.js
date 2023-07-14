import fastify from 'fastify'
/* import { env } from './env' */
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: 3003,
  })
  .then(() => {
    console.log('Serviços no ar')
  })
