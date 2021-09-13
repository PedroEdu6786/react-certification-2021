/* 
  gets item from localStorage
  params:
    itemKey: key used to store data in localStorage

  return: item found on local storage || if not found returns undefined
*/
export const getFromLocalStorage = (itemKey) => {
  let data = localStorage.getItem(itemKey) || undefined;
  if (!data) return data;
  data = JSON.parse(data);

  return data;
};

/* 
  adds item to localStorage
  params:
    data: item to store in localStorage
    itemKey: key used to store data in localStorage

  return: void
*/
export const addToLocalStorage = (data, itemKey) => {
  localStorage.setItem(itemKey, JSON.stringify(data));
};
