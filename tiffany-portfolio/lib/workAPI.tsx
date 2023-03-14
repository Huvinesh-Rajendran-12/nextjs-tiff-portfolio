import Cosmic from 'cosmicjs'
import { WorkPage } from '../interfaces'


const bucket = Cosmic().bucket({
  slug: process.env.BUCKET_SLUG,
  read_key: process.env.BUCKET_READ_KEY
});

export async function getWorkPageData() : Promise<WorkPage[]> {
  const parameters = {
    query: {
      type: 'work',
      slug: 'work'
    },
    props: 'title,slug,metadata'
  };
  const WorkPageData = await bucket.getObjects(parameters);
  return WorkPageData.objects;
}


