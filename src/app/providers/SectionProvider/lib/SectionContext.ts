import { createContext } from 'react';

export enum ESection {
  CHAT = 'chat',
  CARDS = 'cards',
  BOOK = 'book',
  PERSONS = 'persons'
}

export interface ISectionContext {
  section?: ESection;
  setSection?: (section: ESection) => void;
}

export const SectionContext = createContext<ISectionContext>({});