import React from 'react';

const FavoriteCurrencyPairs = ({ favorites, handleFavorite }) => {
  return (
    <ul className='list-disc pl-5 text-white'>
      {favorites.map((pair, index) => (
        <li key={index} className='flex justify-between items-center'>
          {pair}
          <button
            onClick={() => handleFavorite(pair)}
            className='ml-2 text-red-400'
            aria-label={`Remove ${pair} from favorites`}
          >

          </button>
        </li>
      ))}
    </ul>
  );
};

export default FavoriteCurrencyPairs;