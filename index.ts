import express from 'express'
import { getImage } from './lib/chrome'
import { getHtml, getFallback } from './lib/template'

const server = express()

server.get('/', async (request, response) => {
  const { query } = request

  let image

  try {
    const html = await getHtml(query)

    image = await getImage(html, 'png')

    if (!image) {
      image = await getFallback()
    }
  } catch (error) {
    console.error(error)
    image = await getFallback()
  }

  response
    .set('Cache-Control', 'public, max-age=604800, immutable')
    .type('png')
    .end(image)
})

export = server
