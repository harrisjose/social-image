# Open graph image service that runs on deta.sh

[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy)

A deta micro that generates a dynamic image that you can embed in your <meta\> tag.

## Usage

You can simply pass the title and description of your blog post to the micro and it will generate an image for you!

```html
<head>
  <title>Hello World</title>
  <meta
    property="og:image"
    content="https://<micro url>/?title=Hello%20World&description=from%20a%20micro%20running%20on%20deta.sh"
  />
</head>
```

## Why use this service?

From [og-image](https://github.com/vercel/og-image/blob/main/README.md#why-use-this-service):

> The short answer is that it would take a long time to painstakingly design an image for every single blog post and every single documentation page. And we don't want the exact same image for every blog post because that wouldn't make the article stand out when it was shared to Twitter

## Deploying to deta.sh

You'll want to fork this repository and deploy your own image generator.

1. Click the fork button at the top right of this page
2. Clone the forked repo to your local machine
3. Customize the html template in public/index.html
4. Push your changes
5. Use the `Deploy to Deta` button to deploy the micro into your project
6. (Optional) Put your micro behind cloudflare and configure caching

## Customizing the image

You can start the demo server to preview how the image will look like

```bash
npm run demo
```

To customize, change the code in `public/index.html`. Query params in the URL are directly used to replace placeholders in the html file using [ETA](https://eta.js.org/).

## Credits

- Guide on [generative images with SVG](https://georgefrancis.dev/writing/generative-svg-social-images/) by [@georgedoescode](https://twitter.com/georgedoescode)

- Examples and other approaches at [CSS Tricks](https://css-tricks.com/auto-generated-social-media-images/)

- A lot of code borrowed from [Open Graph Image as a Service](https://github.com/vercel/og-image/blob/main/README.md#why-use-this-service)
