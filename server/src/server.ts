import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import { usersRoutes } from './routes/users'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)
app.register(usersRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 HTTP server running on http://localhost:3333')
})
