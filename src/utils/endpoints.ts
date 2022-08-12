const BASE_URL = 'http://www.omdbapi.com/';
const APIKEY = 'da979bab';
const endPoints = {
  getMovies: `${BASE_URL}?s=term&apikey=${APIKEY}`,
};
export {endPoints};
