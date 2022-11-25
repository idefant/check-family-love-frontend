import { FC, SVGProps } from 'react';

type IconFC = FC<SVGProps<SVGSVGElement>>;

export const CopyIcon: IconFC = (props) => (
  <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.3552 16.7917C13.9187 17.5333 14.6375 18.1469 15.463 18.5909C16.2885 19.0349 17.2013 19.299 18.1395 19.3651C19.0778 19.4313 20.0195 19.298 20.9008 18.9743C21.7822 18.6507 22.5825 18.1442 23.2475 17.4892L27.1834 13.6142C28.3784 12.3961 29.0396 10.7648 29.0246 9.0714C29.0097 7.37805 28.3198 5.75822 27.1035 4.56079C25.8873 3.36336 24.242 2.68415 22.522 2.66943C20.802 2.65472 19.145 3.30568 17.9078 4.48212L15.6512 6.69087" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.6032 14.2083C18.0398 13.4668 17.321 12.8531 16.4955 12.4091C15.67 11.9651 14.7572 11.7011 13.8189 11.6349C12.8807 11.5688 11.9389 11.702 11.0576 12.0257C10.1763 12.3494 9.37597 12.8559 8.71094 13.5108L4.77503 17.3858C3.58009 18.6039 2.9189 20.2353 2.93384 21.9286C2.94879 23.622 3.63868 25.2418 4.85493 26.4393C6.07119 27.6367 7.71648 28.3159 9.43646 28.3306C11.1564 28.3453 12.8135 27.6944 14.0507 26.5179L16.2941 24.3092" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const XIcon: IconFC = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const ArrowIcon: IconFC = (props) => (
  <svg width="248" height="42" viewBox="0 0 248 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M245.979 35.6774V35.6774C231.642 27.6617 219.185 16.4108 209.7 2.99998V2.99998" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <path d="M189.481 40.4034V40.4034C207.615 35.1553 226.781 33.5055 245.552 35.5077V35.5077" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <path d="M2 36L22.5788 29.9523C89.1082 10.4009 159.868 10.4796 226.354 30.179L246 36" stroke="black" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const ArrowSmallIcon: IconFC = (props) => (
  <svg width="157" height="36" viewBox="0 0 157 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M156.317 30.3911V30.3911C141.335 23.6555 127.946 13.5331 117.328 0.999983V0.999983" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <path d="M99.4809 34.4034V34.4034C117.615 29.1553 136.781 27.5055 155.552 29.5077V29.5077" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <path d="M1 30V30C51.2205 13.8659 105.818 13.7457 156 30V30" stroke="black" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
