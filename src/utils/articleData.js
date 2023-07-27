import axios from 'axios';

export const getArticles = async () => {
    try {
        const responseData = await axios.get(`http://localhost:3000/mockApiResponse`);
        return responseData.data.response.results;
    }
    catch (error) {
        return error;
    }
}

getArticles();