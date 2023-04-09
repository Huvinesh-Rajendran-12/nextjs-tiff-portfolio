require('dotenv').config()
import * as contentful from 'contentful';
import { TypeHomepage } from '../../interfaces/contentful';
import { useHomePageStore } from '../../store/store';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  environment: process.env.CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
})

export async function getHomePageData() : Promise<contentful.Entry<TypeHomepage>> {
    return await client.getEntry<TypeHomepage>('2t84b4MZ2ANPFNIvAjH2KJ')
}