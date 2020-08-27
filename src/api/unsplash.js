import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4A5FwxBHqaPbYaB9iBreYgXYy53kOTGzJxj8G0QvVuU',
  }
})
