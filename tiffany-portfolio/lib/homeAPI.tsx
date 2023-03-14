import Cosmic from 'cosmicjs'
import { type HomePage } from '../interfaces'


const bucket = Cosmic().bucket({
  slug: process.env.BUCKET_SLUG,
  read_key: process.env.BUCKET_READ_KEY
});

export async function getHomePageData() : Promise<HomePage[]> {
  const parameters = {
    query: {
      type: 'homepage',
      slug: 'homepage'
    },
    props: 'title,slug,metadata'
  };
  const HomePageData = await bucket.getObjects(parameters);
  return HomePageData.objects;
}


