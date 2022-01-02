import axios from 'axios';
import * as url from './url';

export const getCountries = async (endpoint) => {
  const options = {
    method: 'GET',
    url: `${url.GENERAL_INFO}${endpoint}`,
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY, //here you put your API key
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    },
  };
  try {
    const { data } = await axios.request(options);
    return data.response;
  } catch (error) {
    console.log(error);
  }
};

export const getTotalNumber = async () => {
  const options = {
    method: 'GET',
    url: url.TOTAL_DEATH,
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY, //here you put your API key
      'x-rapidapi-host': 'covid-19-world-data-by-zt.p.rapidapi.com',
    },
  };
  try {
    const { data } = await axios.request(options);
    return data.data[0];
  } catch (error) {
    console.log(error);
  }
};
