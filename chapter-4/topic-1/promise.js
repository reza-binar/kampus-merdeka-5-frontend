const axios = require("axios"); // In frontend, it will be import axios from "axios"

// 1: Get the posts api (promise async)
let data;

axios
  .get("https://jsonplaceholder.typicode.com/posts/90")
  .then((response) => {
    data = response?.data;
    const { userId } = data;

    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  })
  .then((response) => {
    data.user = response?.data;

    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

/* 
    It's like -> it will not working if you run the below code, but logically like below!
    ============

    let data;

    try {
        let response = axios.get("https://jsonplaceholder.typicode.com/posts/1");
        data = response?.data;
        const { userId } = data;

        response = axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        data.user = response?.data;

        console.log(data)
    } catch (e) {
        console.error(error);
    }
*/
