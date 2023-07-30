import React from 'react';
import PropTypes from 'prop-types';

const ArticleDateAndWriter = ({ date, writer }) => {
    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }

        return new Date(dateString).toLocaleDateString('en-GB', options);
    }

    return (
        <p className="date-and-writer">
            {formatDate(date)} | {writer}
        </p>
    )
}

ArticleDateAndWriter.propTypes = {
    date: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
}

export default ArticleDateAndWriter;