import Cosmic from 'cosmicjs'
import { WorkPage } from '../interfaces'

const BUCKET_SLUG = process.env.BUCKET_SLUG;
const READ_KEY = process.env.READ_KEY;

const bucket = Cosmic().bucket({
  slug: 'tiffany-portfolio-production',
  read_key: '3WBPcsWhaRMkz6SlUH2dnFZrGC32r2WeKEDJrktobTD2nD9Nws'
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


