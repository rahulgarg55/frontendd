import axios from 'axios';

const API_BASE_URL = 'https://backendd-iota.vercel.app/api/countries';

export const searchCountriesAPI = (query) => {
  return axios.get(`${API_BASE_URL}/search/${query}`);
};

export const getCountryDetailsAPI = (countryCode) => {
  return axios.get(`${API_BASE_URL}/${countryCode}`);
};
