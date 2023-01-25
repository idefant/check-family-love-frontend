import { useState } from 'react';

const useModal = (isOpenInitial = false) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial);

  return {
    isOpen,
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
  };
};

export type TModal = ReturnType<typeof useModal>;

export default useModal;
