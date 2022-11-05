import { FC, SVGProps } from 'react';

type IconFC = FC<SVGProps<SVGSVGElement>>;

export const CopyIcon: IconFC = (props) => (
  <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.3552 16.7917C13.9187 17.5333 14.6375 18.1469 15.463 18.5909C16.2885 19.0349 17.2013 19.299 18.1395 19.3651C19.0778 19.4313 20.0195 19.298 20.9008 18.9743C21.7822 18.6507 22.5825 18.1442 23.2475 17.4892L27.1834 13.6142C28.3784 12.3961 29.0396 10.7648 29.0246 9.0714C29.0097 7.37805 28.3198 5.75822 27.1035 4.56079C25.8873 3.36336 24.242 2.68415 22.522 2.66943C20.802 2.65472 19.145 3.30568 17.9078 4.48212L15.6512 6.69087" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.6032 14.2083C18.0398 13.4668 17.321 12.8531 16.4955 12.4091C15.67 11.9651 14.7572 11.7011 13.8189 11.6349C12.8807 11.5688 11.9389 11.702 11.0576 12.0257C10.1763 12.3494 9.37597 12.8559 8.71094 13.5108L4.77503 17.3858C3.58009 18.6039 2.9189 20.2353 2.93384 21.9286C2.94879 23.622 3.63868 25.2418 4.85493 26.4393C6.07119 27.6367 7.71648 28.3159 9.43646 28.3306C11.1564 28.3453 12.8135 27.6944 14.0507 26.5179L16.2941 24.3092" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export const XIcon: IconFC = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
