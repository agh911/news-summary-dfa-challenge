import axios from 'axios';

export const getArticles = async () => {
    const baseUrl = "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=";
    const apiKey = "11338747-87e1-4f6e-a6d7-aadefc0b2bb2";

    try {
        const responseData = await axios.get(`http://localhost:3000/mockApiResponse`);
        return responseData.data.response.results;
    }
    catch (error) {
        return error;
    }
}

// getArticles();