export const setUser = (data) => {
  localStorage.setItem('user', JSON.stringify(data));
}

export const getUser = () => {
  localStorage.getItem('user')
}