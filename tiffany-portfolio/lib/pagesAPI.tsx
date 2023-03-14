import Cosmic from 'cosmicjs'
import { Page } from '../interfaces'


const bucket = Cosmic().bucket({
  slug: process.env.BUCKET_SLUG,
  read_key: process.env.BUCKET_READ_KEY
});

export async function getPagesData(slug_: string) : Promise<Page[]> {
  const parameters = {
    query: {
      type: 'pages',
      slug: slug_
    },
    props: 'title,slug,metadata'
  };
  const PagesData = await bucket.getObjects(parameters);
  return PagesData.objects;
}


