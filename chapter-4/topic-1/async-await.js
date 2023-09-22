const axios = require("axios");

const getData = async () => {
    try {
        let data;

        const postResponse = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/15"
        );
        data = postResponse?.data;
        const { userId } = data;

        const userResponse = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        data.user = userResponse?.data;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

getData();
