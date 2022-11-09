import { useRef, useState } from 'react';

const useResettableState = <T>(initialValue: T) => {
  const defaultValue = useRef(initialValue);
  const [value, setValue] = useState(initialValue);

  return {
    value,
    set: setValue,
    reset: () => setValue(defaultValue.current),
  };
};

export default useResettableState;
