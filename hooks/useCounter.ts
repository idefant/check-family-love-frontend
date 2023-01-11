import { useCallback, useState } from 'react';

type useCounterParams = {
  value?: number;
  min?: number;
  max?: number;
};

const useCounter = ({ value = 0, min = -Infinity, max = Infinity }: useCounterParams) => {
  const [count, setCount] = useState(value);

  const increment = useCallback(() => {
    const newCount = count + 1;
    if (newCount <= max) {
      setCount(newCount);
    }
  }, [count, max]);

  const decrement = useCallback(() => {
    const newCount = count - 1;
    if (newCount >= min) {
      setCount(newCount);
    }
  }, [count, min]);

  return { value: count, setValue: setCount, increment, decrement };
};

export default useCounter;
