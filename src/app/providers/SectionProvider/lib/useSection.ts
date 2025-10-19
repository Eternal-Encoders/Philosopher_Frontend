import { use } from 'react';
import { SectionContext } from './SectionContext';

export const useSection = () => {
  const {section, setSection} = use(SectionContext);
  if (!setSection) {
    throw new Error('setSection is not defined in SectionContext');
  }
  if (section === undefined) {
    throw new Error('section is not defined in SectionContext');
  }
  return {section, setSection};
};