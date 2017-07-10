// @flow
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const resetStyles = `
  html, body {
    font-size: 16px;
    line-height: 1.6;
    font-style: normal;
    padding: 0;
    margin: 0;
    color: #000;

    -webkit-font-smoothing: subpixel-antialiased;

    @media (max-width: 1000px) {
      font-size: 14px;
    }
  }
`

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    const language = 'zh-Hans'

    return (
      <html lang={language}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Nice-UI</title>
          <meta name="description" content="simple and nice ui components" />

          {/* eslint react/no-danger: 0 */}
          <style dangerouslySetInnerHTML={{ __html: resetStyles }} />
          {styleTags}
        </Head>

        <body>
          {main}

          <NextScript />
        </body>
      </html>
    )
  }
}
