import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Allison&family=Baskervville&family=Nothing+You+Could+Do&family=Playfair+Display&family=Roboto+Condensed:wght@300&family=Roboto:wght@300&family=Source+Sans+Pro&family=Vujahday+Script&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
