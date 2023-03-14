import Cosmic from 'cosmicjs'
import { Font } from '../interfaces'


const bucket = Cosmic().bucket({
  slug: process.env.BUCKET_SLUG,
  read_key: process.env.BUCKET_READ_KEY
});

export async function getFontConfig() : Promise<Font[]> {
  const parameters = {
    query: {
      type: 'font',
      slug: 'font'
    },
    props: 'title,slug,metadata'
  };
  const fontData = await bucket.getObjects(parameters);
  return fontData.objects;
}


