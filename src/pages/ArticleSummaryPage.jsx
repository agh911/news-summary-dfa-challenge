import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';

const ArticleSummary = ({ articles }) => {
    const dateFormat = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };

    const { id } = useParams();
    const navigate = useNavigate();

    // Need to find the article with the matching id from the articles array
    const article = articles.find((article) => article.id === id);

    if (!article) {
        // If article not found,use navigate to redirect to the error page
        navigate('/error');
    }

    return (
        <div className='container my-5 d-flex flex-column'>
            <div className='row'>
                <img className='article-image mb-4 col-md-6' src={article.fields.thumbnail} alt={article.fields.headline} />
                <div className='col-md-6'>
                    <h3>{article.fields.headline}</h3>
                    <p>By {article.fields.byline}{" - "}{new Date(article.webPublicationDate).toLocaleDateString('en-GB', dateFormat)}</p>
                    {/* <p>{article.webPublicationDate}</p> */}
                    <p>{article.fields.bodyText.substring(0, 900)}{"..."} <a href={article.webUrl}>Read More</a></p>
                </div>
            </div>
        </div>
    )
}

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