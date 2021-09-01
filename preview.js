const server = require('./index.js')
const { getHtml } = require('./lib/template.js')

server.get('/preview', async (request, response) => {
  const html = await getHtml({
    title: 'This is the post title',
    description:
      'This is the post description in a smaller font with way more content added',
  })
  response.setHeader('content-type', 'text/html').end(html)
})

server.listen(3000)
