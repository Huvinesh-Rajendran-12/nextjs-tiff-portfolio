// require('dotenv').config()
import * as dotenv from 'dotenv'
dotenv.config()
import * as contentful from 'contentful';
import { TypeFont, TypeHomepage } from '../../interfaces/contentful';

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  environment: process.env.CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
})

export async function getHomePageData() : Promise<contentful.Entry<TypeHomepage>> {
    return await client.getEntry<TypeHomepage>('2t84b4MZ2ANPFNIvAjH2KJ')
}

export async function getFontData() : Promise<contentful.Entry<TypeFont>> {
  return await client.getEntry<TypeFont>('72aWq6mEK8RTqe0tJcENHq')
}