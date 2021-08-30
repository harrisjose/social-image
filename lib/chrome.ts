import chrome from 'chrome-aws-lambda'

type FileType = 'png' | 'jpeg'

export async function getImage(html: string, type: FileType) {
  let browser = null
  let file = null

  try {
    browser = await chrome.puppeteer.launch({
      args: chrome.args,
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
      ignoreHTTPSErrors: true,
    })

    const page = await browser.newPage()

    await page.setViewport({ width: 2048, height: 1024 })
    await page.setContent(html)

    file = await page.screenshot({ type })
  } catch (error) {
    console.error(error)
  } finally {
    if (browser !== null) {
      await browser.close()
    }
  }

  return file
}
