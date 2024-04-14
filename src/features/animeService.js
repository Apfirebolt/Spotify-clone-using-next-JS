import axios from 'axios'
const API_URL = 'https://api.jikan.moe/v4/'


// Get anime List
const getAnimeList = async () => {
  try {
    const response = await axios.get(API_URL + 'anime')
    return response.data
  } catch (err) {
    let errorMessage = 'Something went wrong'
    if (err.response.status === 401) {
      errorMessage = 'Unauthorized access, please login again.'
    }
  }
}

const animeService = {
    getAnimeList,
}

export default animeService