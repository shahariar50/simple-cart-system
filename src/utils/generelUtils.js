// Get unique by adding 1 with last id of the last item of an array
export const getUniqueId = (items) =>
  items.length === 0 ? 1 : items.at(-1).id + 1;

// Set any data to locat store by its name
export const setLocalStorgeData = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data));
};
