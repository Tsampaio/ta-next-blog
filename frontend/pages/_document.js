import Document, { Html, Main, Head, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <Head />
          <Main />
          <NextScript />
          <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
