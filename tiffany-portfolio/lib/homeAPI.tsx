import Cosmic from 'cosmicjs'
import { type HomePage } from '../interfaces'

const BUCKET_SLUG = process.env.BUCKET_SLUG;
const READ_KEY = process.env.READ_KEY;

const bucket = Cosmic().bucket({
  slug: 'tiffany-portfolio-production',
  read_key: '3WBPcsWhaRMkz6SlUH2dnFZrGC32r2WeKEDJrktobTD2nD9Nws'
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


