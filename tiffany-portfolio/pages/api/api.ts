// require('dotenv').config()
import * as dotenv from 'dotenv'
dotenv.config()
import * as contentful from 'contentful';
import { TypeFont, TypeHomepage, TypeAboutPage, TypeServices, TypeWork } from '../../interfaces/contentful';

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  environment: process.env.CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
})

export async function getHomePageData() : Promise<contentful.Entry<TypeHomepage>> {
    return await client.getEntry<TypeHomepage>(process.env.HOME_PAGE_ENTRY_ID ?? '')
}

export async function getFontData() : Promise<contentful.Entry<TypeFont>> {
  return await client.getEntry<TypeFont>(process.env.FONT_ENTRY_ID ?? '')
}

export async function getAboutPageData() : Promise<contentful.Entry<TypeAboutPage>> {
  return await client.getEntry<TypeAboutPage>(process.env.ABOUT_PAGE_ENTRY_ID ?? '')
}

export async function getPage1Data() : Promise<contentful.Entry<TypeAboutPage>> {
  return await client.getEntry<TypeAboutPage>(process.env.PAGE_1_ENTRY_ID ?? '')
}

export async function getPage2Data() : Promise<contentful.Entry<TypeAboutPage>> {
  return await client.getEntry<TypeAboutPage>(process.env.PAGE_2_ENTRY_ID ?? '')
}

export async function getPage3Data() : Promise<contentful.Entry<TypeAboutPage>> {
  return await client.getEntry<TypeAboutPage>(process.env.PAGE_3_ENTRY_ID ?? '')
}

export async function getPage4Data() : Promise<contentful.Entry<TypeAboutPage>> {
  return await client.getEntry<TypeAboutPage>(process.env.PAGE_4_ENTRY_ID ?? '')
}

export async function getPage5Data() : Promise<contentful.Entry<TypeAboutPage>> {
  return await client.getEntry<TypeAboutPage>(process.env.PAGE_5_ENTRY_ID ?? '')
}

export async function getServicesPageData() : Promise<contentful.Entry<TypeServices>> {
  return await client.getEntry<TypeServices>(process.env.SERVICES_PAGE_ENTRY_ID ?? '')
}

export async function getWorkPageData() : Promise<contentful.Entry<TypeWork>> {
  return await client.getEntry<TypeWork>(process.env.WORK_PAGE_ENTRY_ID ?? '')
}