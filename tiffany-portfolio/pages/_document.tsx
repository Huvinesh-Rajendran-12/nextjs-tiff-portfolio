import { Html, Head, Main, NextScript } from 'next/document';
import { getAcccessoryData } from './api/api';
import { TypeAcessories } from '../interfaces/contentful';
import { Entry } from 'contentful';

type DocumentPageProps = {
    AccessoryData: Entry<TypeAcessories>
    
}

export default function Document({AccessoryData}:DocumentPageProps) {
  const AccessoryDataMetadata = AccessoryData.fields
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Allison&family=Baskervville&family=Nothing+You+Could+Do&family=Playfair+Display&family=Roboto+Condensed:wght@300&family=Roboto:wght@300&family=Source+Sans+Pro&family=Vujahday+Script&display=swap" rel="stylesheet" />
        <link rel="icon" href={AccessoryDataMetadata.favicon?.fields.file.url} />
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
