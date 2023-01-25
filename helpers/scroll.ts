import { scroller } from 'react-scroll';

export const scrollTo = (sectionName: string, props?: any) => {
  const headerElement = document.getElementsByTagName('header')[0]?.clientHeight;

  scroller.scrollTo(sectionName, {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: headerElement ? -headerElement : 0,
    ...props,
  });
};
