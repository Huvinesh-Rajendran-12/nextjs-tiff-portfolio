import Cosmic from 'cosmicjs'
import { Font, Page } from '../interfaces'

const BUCKET_SLUG = process.env.BUCKET_SLUG;
const READ_KEY = process.env.READ_KEY;

const bucket = Cosmic().bucket({
  slug: 'tiffany-portfolio-production',
  read_key: '3WBPcsWhaRMkz6SlUH2dnFZrGC32r2WeKEDJrktobTD2nD9Nws'
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


