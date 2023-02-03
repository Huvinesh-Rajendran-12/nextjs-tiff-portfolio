import Cosmic from 'cosmicjs'
import { Font } from '../interfaces'

const BUCKET_SLUG = process.env.BUCKET_SLUG;
const READ_KEY = process.env.READ_KEY;

const bucket = Cosmic().bucket({
  slug: 'tiffany-portfolio-production',
  read_key: '3WBPcsWhaRMkz6SlUH2dnFZrGC32r2WeKEDJrktobTD2nD9Nws'
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


