import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer pJ60F6E_amHQuaRHVjKrqk-7nefZxVRG_pyHrTgjAscp9MzMxfIsFyUTK-KfJdxWNXkuDagXx6yoKfOdYGQfZbEpl-k25NIRZ8P0SRJbXqGNNM9ylO2dbxP1C8aEXXYx'
  }
});