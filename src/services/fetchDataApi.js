import axios from 'axios';

const fetchDataApi = (searchQuery, page) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '18667452-b6cf3b15ecb06490e1251bb0b';
  return axios
    .get(`${URL}?key=${KEY}&per_page=12&page=${page}&q=${searchQuery}`)
    .then(res => res.data);
};

export default fetchDataApi;

// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '18667452-b6cf3b15ecb06490e1251bb0b';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// const fetchDataApi = async (searchQuery, page = 1) => {
//   try {
//     const { data } = await axios.get('', {
//       params: { searchQuery, page },
//     });
//     return data;
//   } catch (error) {
//     console.log('error', error);
//     return [];
//   }
// };

// export default fetchDataApi;
