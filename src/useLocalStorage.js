import { useCallback, useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const getItem = useCallback((initialValue) => {
    const item = localStorage.getItem(key, initialValue);
    const convertedItem = JSON.parse(item);
    return convertedItem ? convertedItem : initialValue;
  }, []);

  const [value, setValue] = useState(initialValue);
  const [itemList, setItemList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log("from array", itemList);
  const item = localStorage.getItem(key);
  const convertedItem = JSON.parse(item);
  console.log("from localStorage", convertedItem);

  const handleSubmit = () => {
    if (value !== "") {
      setItemList((prev) => {
        return [...prev, value];
      });
      localStorage.setItem(key, JSON.stringify(value));

      setValue("");
    }
  };

  useEffect(() => {
    localStorage.removeItem(key);
  }, [value]);

  return { value, itemList, handleChange, handleSubmit };
};

export default useLocalStorage;
