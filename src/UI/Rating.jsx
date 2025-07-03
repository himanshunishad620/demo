import React from 'react'

export default function StarRating({ rating }) {
  const totalStars = 5;
  const fullStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(totalStars - rating);

  return (
    <span style={{ color: 'gold', fontSize: '24px' }}>
      {fullStars}
      <span style={{ color: '#ccc' }}>{emptyStars}</span>
    </span>
  );
}
