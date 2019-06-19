export const fetchData = async () => {
  try {
    const response = await fetch('https://api.github.com/users/mralexgray/repos');
    return await response.json();
  } catch (e) {
    return Promise.reject(e);
  }
};
