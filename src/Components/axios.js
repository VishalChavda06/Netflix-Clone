import axios from 'axios';

const Instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Replace with your API base URL
});

export default Instance;