import { useState, useEffect } from "react";

const useDebounce = (value, time = 250) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value, time]);

  return debounceValue;
};

export default useDebounce;
