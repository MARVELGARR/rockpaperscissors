

import { useState } from 'react';

interface useLocalStorageProps{
    key: string;
    initialValue: string;
}

const useLocalStorage = ({key, initialValue}: useLocalStorageProps)  => {
  // Retrieve stored value from local storage on component mount
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to hold the current value
  const [value, setValue] = useState(initial);

  // Function to update the local storage and the state
  const updateValue = (newValue: string | number | null ) => {
    // Save the new value to local storage
    localStorage.setItem(key, JSON.stringify(newValue));
    // Update the state
    setValue(newValue);
  };

  // Return the current value and the function to update it
  return {value, updateValue}
};

export default useLocalStorage;
