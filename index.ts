import { fastify } from 'fastify'
import { getImage } from './lib/chrome'
import { getHtml, getFallback } from './lib/template'

const server = fastify({ logger: true })

type QueryString = {
  title: string
  description: string
  layout: string | undefined
}

server.get<{
  Querystring: QueryString
}>('/', async (request, reply) => {
  const { query } = request

  let image

  try {
    const html = await getHtml(query)

    image = await getImage(html, 'jpeg')

    if (!image) {
      image = await getFallback()
    }
  } catch (error) {
    console.error(error)
    image = await getFallback()
  }

  reply.type('image/jpeg').send(image)
})

export = server
