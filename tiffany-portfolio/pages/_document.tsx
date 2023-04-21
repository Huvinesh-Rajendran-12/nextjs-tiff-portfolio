import { Html, Head, Main, NextScript } from 'next/document';
import { getAcccessoryData } from './api/api';
import { TypeAcessories } from '../interfaces/contentful';
import { Entry } from 'contentful';

type DocumentPageProps = {
    AccessoryData: Entry<TypeAcessories>
    
}

export default function Document({AccessoryData}:DocumentPageProps) {
  // console.log('Accessory data',AccessoryData)
  // const AccessoryDataMetadata = AccessoryData.fields
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Allison&family=Baskervville&family=Nothing+You+Could+Do&family=Playfair+Display&family=Roboto+Condensed:wght@300&family=Roboto:wght@300&family=Source+Sans+Pro&family=Vujahday+Script&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const getStaticProps = async () => {
  const AccessoryData = (await getAcccessoryData())
  return {
    props: {
      AccessoryData
    }
  }

}
