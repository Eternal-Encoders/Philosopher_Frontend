import { useMemo, useState } from 'react';
import { ESection, SectionContext } from '../lib/SectionContext';

interface ISectionProviderProps {
  children: React.ReactNode;
}

export const SectionProvider = ({ children }: ISectionProviderProps) => {
  const [section, setSection] = useState<ESection>(ESection.CHAT);

  const defaultProps = useMemo(() => ({
    section,
    setSection,
  }), [section]);

  return (
    <SectionContext value={defaultProps}>
      {children}
    </SectionContext>
  );
};
