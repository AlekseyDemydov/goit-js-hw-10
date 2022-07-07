const fetchCountries = name => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
    if (response.status === 500) {
      return Promise.reject(new Error());
    }
    return response.json();
  });
};
export { fetchCountries };
