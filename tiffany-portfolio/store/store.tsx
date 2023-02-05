import { create } from 'zustand'
import { HomePage, AboutPage, Font, Page, ServicesPage } from '../interfaces'


interface fontStoreState {
    font: Font | undefined
    addFont: (font: Font) => void
}

interface HomePageStoreState {
    HomePageData: HomePage | undefined
    addHomePageData: (homePage: HomePage) => void
}

interface AboutPageStoreState {
    AboutPageData: AboutPage | undefined
    addAboutPageData: (aboutPage: AboutPage) => void
}

interface ServicesPageStoreState {
    ServicesPageData: ServicesPage | undefined
    addServicesPageData: (servicesPage: ServicesPage) => void
}

interface PagesStoreState {
  pagesData: Page[] | undefined
  addPagesData: (pages: Page[]) => void
}


export const useFontStore = create<fontStoreState>()((set) => ({
  font: undefined,
  addFont: (font) => set((state) => ({ font: font })),
}))

export const useHomePageStore = create<HomePageStoreState>()((set) => ({
  HomePageData: undefined,
  addHomePageData: (homePage) => set((state) => ({ HomePageData: homePage })),
}))

export const useAboutPageStore = create<AboutPageStoreState>()((set) => ({
  AboutPageData: undefined,
  addAboutPageData: (aboutPage) => set((state) => ({ AboutPageData: aboutPage })),
}))

export const usePagesStore = create<PagesStoreState>()((set) => ({
  pagesData: undefined,
  addPagesData: (pagesData) => set((state) => ({ pagesData: pagesData })),
}))

export const useServicesPageStore = create<ServicesPageStoreState>()((set) => ({
  ServicesPageData: undefined,
  addServicesPageData: (ServicesPage) => set((state) => ({ ServicesPageData: ServicesPage })),
}))