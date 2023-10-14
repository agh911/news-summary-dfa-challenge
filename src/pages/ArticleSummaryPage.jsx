import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import ArticleDateAndWriter from '../components/ArticleDateAndWriter';
import './ArticleSummaryPage.css';

const ArticleSummary = ({ articles }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Need to find the article with the matching id from the articles array
    const article = articles.find((article) => article.id === id);

    useEffect(() => {
        // If article not found, let the user know by navigating to the error page
        if (!article) {
            navigate('/error');
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }

    return (
        <div className='container my-5 d-flex flex-column'>
            <div className='row'>
                <div className='col-md-6 d-flex flex-column'>
                    <img className='article-image mb-4' src={article.fields.thumbnail} alt={article.fields.headline} />
                </div>
                <div className='col-md-6'>
                    <p className='section-name'>{article.sectionName.toUpperCase()}</p>
                    <h3>{article.fields.headline}</h3>
                    <ArticleDateAndWriter date={article.webPublicationDate} writer={article.fields.byline} />
                    <p>{article.fields.bodyText.substring(0, 750)}{"..."} <a href={article.webUrl} target='_blank' rel='noreferrer noopener'>Read More</a></p>
                </div>
            </div>
        </div>
    );
};

ArticleSummary.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            sectionName: PropTypes.string.isRequired,
            webPublicationDate: PropTypes.string.isRequired,
            webUrl: PropTypes.string.isRequired,
            fields: PropTypes.shape({
                headline: PropTypes.string.isRequired,
                byline: PropTypes.string.isRequired,
                thumbnail: PropTypes.string.isRequired,
                bodyText: PropTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
};

export default ArticleSummary;
