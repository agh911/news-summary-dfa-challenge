import axios from 'axios';
import { getArticles } from '../src/utils/articleData';
import articleTestData from './articleTestData.json';

vi.mock('axios');

describe('getArticles tests', () => {
    it('should actually make the external data call', async () => {
        // Arrange
        axios.get.mockResolvedValueOnce({});

        // Act
        await getArticles();

        // Assert
        expect(axios.get).toHaveBeenCalledWith('https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=11338747-87e1-4f6e-a6d7-aadefc0b2bb2');
    });

    it('should have successful request returning the right data', async () => {
        // Arrange
        axios.get.mockResolvedValueOnce({ data: { response: { results: articleTestData } } });

        // Act
        const result = await getArticles();

        // Assert
        expect(result).toEqual(articleTestData);
    });
})
