import PropTypes from 'prop-types';

const ArticleCard = ({ articles }) => {
    return (
        <>
            {articles.map((article) => (
                <div key={article.id} className="col-md-6 mb-4">
                    <div className="article-card d-flex flex-column" onClick={() => handleClick(article.id)}>
                        <img src={article.fields.thumbnail} alt={article.fields.headline} />
                        <p className="section-name mt-2 mb-1">{article.sectionName.toUpperCase()}</p>
                        <p className="date-and-writer">
                            {new Date(article.webPublicationDate).toLocaleDateString('en-GB')}{' '} | {article.fields.byline}
                        </p>
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