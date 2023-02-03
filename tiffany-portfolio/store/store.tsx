import { create } from 'zustand'
import { Font } from '../interfaces'

interface fontStoreState {
    font: Font | undefined
    addFont: (font: Font) => void
}

export const useFontStore = create<fontStoreState>()((set) => ({
  font: undefined,
  addFont: (font) => set((state) => ({ font: font })),
}))