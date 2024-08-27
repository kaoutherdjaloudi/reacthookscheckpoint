// src/components/Filter.jsx
import React from 'react';

const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
