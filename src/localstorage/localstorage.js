export const setUser = (data) => {
  localStorage.setItem('user', JSON.stringify(data));
}

export const getUser = () => {
  const items = JSON.parse(localStorage.getItem('user'));
  if (items) {
   return items;
  }
}