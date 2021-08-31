import { promises as fs } from 'fs'
import { render } from 'eta'

export async function getHtml(data: object) {
  const path = `public/index.html`

  const content = await fs.readFile(path, 'utf8')

  const html = await render(content, data)

  if (html) {
    return html
  } else {
    console.error(`Placeholder replace failed`)
    throw new Error()
  }
}

export async function getFallback() {
  return await fs.readFile(`public/default.png`)
}
