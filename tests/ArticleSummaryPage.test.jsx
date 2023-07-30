import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import ArticleSummaryPage from '../src/pages/ArticleSummaryPage';
import ErrorPage from '../src/pages/ErrorPage';
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

    it('should navigate to the Error Page when an article is not found', () => {
        // Arrange
        const invalidArticleId = 'some_invalid_article_id';
        const routes = [
            {
                path: '/error',
                element: <ErrorPage />,
            },
            {
                path: '/article/:id',
                element: <ArticleSummaryPage articles={articleTestData} />,
            },
        ];

        // Act
        const router = createMemoryRouter(
            routes,
            {
                initialEntries: [`/article/${invalidArticleId}`],
                initialIndex: 0,
            }
        );

        render(
            <RouterProvider router={router} />
        );

        // Assert
        const errorPageElement = screen.getByText('Oops! A Mischievous Dog Chewed Up This Page');
        expect(errorPageElement).toBeInTheDocument();
    });
})
