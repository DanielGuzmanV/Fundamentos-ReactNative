import { useCallback, useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
  }, []);

  return {count, increment, decrement};

}