import { useRef, useEffect, useState, ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  selector?: string;
}

const Portal: FC<PortalProps> = ({ children, selector = 'body' }) => {
  const ref = useRef<Element>();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector) || document.body;
    setMount(true);
  }, [selector]);

  return mount && ref.current ? createPortal(children, ref.current) : null;
};

export default Portal;
