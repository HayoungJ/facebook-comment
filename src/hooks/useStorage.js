import { useEffect, useState } from 'react';

const useStorage = (key, initValue = null) => {
  const [value, setValue] = useState(initValue);

  const removeValue = () => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    const value = localStorage.getItem(key);
    setValue(JSON.parse(value));
  }, [key]);

  useEffect(() => {
    if (!value) return;
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue, removeValue];
};

export default useStorage;
