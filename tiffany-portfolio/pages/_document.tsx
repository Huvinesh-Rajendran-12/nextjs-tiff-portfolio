import { Html, Head, Main, NextScript } from 'next/document';
import { getAcccessoryData } from './api/api';
import { TypeAcessories } from '../interfaces/contentful';
import { Entry } from 'contentful';

type DocumentPageProps = {
    AccessoryData: Entry<TypeAcessories>
    
}

export default function Document({AccessoryData}:DocumentPageProps) {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Allison&family=Baskervville&family=Nothing+You+Could+Do&family=Playfair+Display:ital@0;1&family=Roboto+Condensed:wght@300&family=Roboto:wght@300&family=Source+Sans+Pro&family=Vujahday+Script&display=swap" rel="stylesheet"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="description" content="Tiffany C. is a Malaysian creative designer and marketing professional, specialising in graphic design, branding, and social media marketing. With expertise in developing and refining brand identities, she creates promotional materials that communicate her clients' messages effectively, enhancing their online presence and driving revenue growth."></meta>
        <meta property="og:title" content="TIFFANYCFY"/>
        <meta property="og:description" content="Tiffany C. is a Malaysian creative designer and marketing professional, specialising in graphic design, branding, and social media marketing. With expertise in developing and refining brand identities, she creates promotional materials that communicate her clients' messages effectively, enhancing their online presence and driving revenue growth."/>
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
