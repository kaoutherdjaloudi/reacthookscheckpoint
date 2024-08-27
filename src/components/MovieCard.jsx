// src/components/MovieCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-poster" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterURL: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
