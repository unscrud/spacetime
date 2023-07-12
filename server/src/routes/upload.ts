import { FastifyInstance } from 'fastify'

export async function uploadRoutes(app: FastifyInstance) {
  // para testar...
  // http POST localhost:3333/upload file@/path/to/file.txt -f
  app.post('/upload', async (request, reply) => { })
}
