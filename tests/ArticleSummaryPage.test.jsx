import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import ArticleSummaryPage from '../src/pages/ArticleSummaryPage';
import articleTestData from './articleTestData.json';

describe('Article Summary Page Tests', () => {
    it('should render the Article Summary page with correct article details', () => {
        // Arrange
        const routes = [
            {
                path: '/article/:id',
                element: <ArticleSummaryPage articles={articleTestData} />,
            },
            {
                path: '/',
                element: <></>,
            },
        ]

        // Act
        const router = createMemoryRouter(
            routes,
            {
                initialEntries: [`/article/${articleTestData[0].id}`],
                initialIndex: 0,
            }
        )

        render(
            <RouterProvider router={router} />
        )

        // Assert
        expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    });
})
