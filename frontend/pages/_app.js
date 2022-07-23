import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
        <link href="https://cdn.quilljs.com/1.3.6/quill.core.css" rel="stylesheet" />
        <script src="https://cdn.quilljs.com/1.3.6/quill.core.js"></script> */}
        {/* <link rel="stylesheet" href="node_modules/react-quill/dist/quill.snow.css"></link> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
        <link rel="stylesheet" href="/static/css/styles.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
