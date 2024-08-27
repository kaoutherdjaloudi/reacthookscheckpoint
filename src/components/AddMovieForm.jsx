// src/components/AddMovieForm.js
import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && posterURL && rating) {
      onAddMovie({
        title,
        description,
        posterURL,
        rating: parseFloat(rating),
      });
      // Clear form
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Poster URL:</label>
        <input
          type="text"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
