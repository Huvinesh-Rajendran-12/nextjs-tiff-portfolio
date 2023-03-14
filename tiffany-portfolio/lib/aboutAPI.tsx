import Cosmic from 'cosmicjs'
import { Font } from '../interfaces'


const bucket = Cosmic().bucket({
  slug: process.env.BUCKET_SLUG,
  read_key: process.env.BUCKET_READ_KEY
});

export async function getAboutPageData() : Promise<Font[]> {
  const parameters = {
    query: {
      type: 'about',
      slug: 'about'
    },
    props: 'title,slug,metadata'
  };
  const AboutPageData = await bucket.getObjects(parameters);
  return AboutPageData.objects;
}


