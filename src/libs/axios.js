import axios from 'axios';

async function getWishlist() {
  const REACT_APP_API_KEY = 'a4da86d5bbde0911561718ede02cdc16';
  const REACT_APP_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGRhODZkNWJiZGUwOTExNTYxNzE4ZWRlMDJjZGMxNiIsInN1YiI6IjY2M2U0ZTVlYjJlYTI4ZjAxNWYxZWU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HoCiKbX5lYC4rGavrL-2lcqSJrSfKEEuW4Q0Byd42yI';

  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/550', {
      params: {
        api_key: REACT_APP_API_KEY,
        language: 'en-US',
      },
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('Response Data:', response.data);
  } catch (error) {
    if (error.response) {

      console.error('Data:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      console.error('Request:', error.request);
    } else {
      
      console.error('Error:', error.message);
    }
    console.error('Full Error Object:', error);
  }
}

getWishlist();

export default axios;

