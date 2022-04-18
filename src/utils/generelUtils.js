export const getUniqueId = (items) =>
  items.length === 0 ? 1 : items.at(-1).id + 1;

export const setLocalStorgeData = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data));
};
