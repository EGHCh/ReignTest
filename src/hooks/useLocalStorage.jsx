import React, {useState} from 'react'

export  function useLocalStorage(key, initalValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try{
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initalValue
    } catch(error){
      return initalValue
    }
  });
  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }
  return [storedValue, setValue]
}
