import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b287e57fba54a5b7e9e5b8.mockapi.io',
  
});

const getCampersRequest = async () => {
  const { data } = await instance.get('/ads');
  return data;
};

export { getCampersRequest };