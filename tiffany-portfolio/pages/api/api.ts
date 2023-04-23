// require('dotenv').config()
import * as dotenv from 'dotenv'
dotenv.config()
import * as contentful from 'contentful';
import { TypeFont, TypeHomepage, TypeAboutPage, TypeServices, TypeWork, TypeAcessories, TypePages } from '../../interfaces/contentful';

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  environment: process.env.CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
})

export async function getHomePageData() : Promise<contentful.EntryCollection<TypeHomepage>> {
    return await client.getEntries<TypeHomepage>({content_type: 'homepage', include: 2})
}

export async function getFontData() : Promise<contentful.Entry<TypeFont>> {
  return await client.getEntry<TypeFont>(process.env.FONT_ENTRY_ID ?? '')
}

export async function getAboutPageData() : Promise<contentful.Entry<TypeAboutPage>> {
  return await client.getEntry<TypeAboutPage>(process.env.ABOUT_PAGE_ENTRY_ID ?? '')
}

export async function getServicesPageData() : Promise<contentful.Entry<TypeServices>> {
  return await client.getEntry<TypeServices>(process.env.SERVICES_PAGE_ENTRY_ID ?? '')
}

export async function getWorkPageData() : Promise<contentful.EntryCollection<TypeWork>> {
  return await client.getEntries<TypeWork>({content_type: 'work', include: 2})
}

export async function getAcccessoryData() : Promise<contentful.Entry<TypeAcessories>> {
  return await client.getEntry<TypeAcessories>(process.env.ACCESSORIES_PAGE_ENTRY_ID ?? '')
}

export async function getPageSlugList() : Promise<contentful.EntryCollection<TypePages>> {
  return await client.getEntries<TypePages>({content_type: 'pages',select: ['fields.slug']})
}

export async function getPageBySlug(slug: string | undefined) : Promise<contentful.EntryCollection<TypePages>> {
  return await client.getEntries<TypePages>({content_type: 'pages', 'fields.slug' : slug, include: 2})

}
