import Cosmic from 'cosmicjs'
import { Font, ServicesPage } from '../interfaces'


const bucket = Cosmic().bucket({
  slug: process.env.BUCKET_SLUG,
  read_key: process.env.BUCKET_READ_KEY
});

export async function getServicesPageData() : Promise<ServicesPage[]> {
  const parameters = {
    query: {
      type: 'services',
      slug: 'services'
    },
    props: 'title,slug,metadata'
  };
  const ServicesPageData = await bucket.getObjects(parameters);
  return ServicesPageData.objects;
}


