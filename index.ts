import express from 'express'
import { getImage } from './lib/chrome'
import { getLayout, getError, getFallback } from './lib/template'

const server = express()

server.get('/preview', async (request, response) => {
  const { query } = request
  let html

  try {
    html = await getLayout({
      title: 'This is the post title',
      description:
        'This is the post description in a smaller font with more pointless text added to make it wrap',
      ...query,
    })
  } catch (error) {
    console.error(error)
    html = await getError()
  }

  response.setHeader('content-type', 'text/html').end(html)
})

server.get('/', async (request, response) => {
  const { query } = request

  let image

  try {
    const html = await getLayout(query)

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
