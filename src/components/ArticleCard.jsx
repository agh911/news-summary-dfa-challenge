import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ArticleDateAndWriter from './ArticleDateAndWriter';
import './ArticleCard.css';

const ArticleCard = ({ articles }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/article/${id}`);
    };

    // If no articles have been found, let the user know by displaying a message
    if (!articles || articles.length === 0) {
        return <p>No articles available.</p>;
    }

    return (
        <>
            {articles.map((article) => (
                <div key={article.id} className="col-md-6 mb-4">
                    <div className="article-card d-flex flex-column" onClick={() => handleClick(article.id)}>
                        <img className='article-image' src={article.fields.thumbnail} alt={article.fields.headline} />
                        <p className="section-name mt-2 mb-1">{article.sectionName.toUpperCase()}</p>
                        <ArticleDateAndWriter date={article.webPublicationDate} writer={article.fields.byline} />
                        <h3>{article.fields.headline}</h3>
                    </div>
                </div>
            ))}
        </>
    )
}

ArticleCard.propTypes = {
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

export default ArticleCard;