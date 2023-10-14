import PropTypes from 'prop-types';
import ArticleCard from '../components/ArticleCard.jsx';

const Headlines = ({ articles }) => {
    return (
        <div className="container my-4">
            <h3 className="border-bottom pb-2 mb-4">Latest News</h3>
            <div className="row">
                <ArticleCard articles={articles} />
            </div>
        </div>
    )
}

Headlines.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.object
    ),
}

export default Headlines;