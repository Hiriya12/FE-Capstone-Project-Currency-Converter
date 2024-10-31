import React, { useState, useEffect } from 'react';

const FavoriteCurrencyPairs = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);


  const favoriteCurrencies = ["EUR", "JPY", "GBP"];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/5b8902368ceafabec84910c9/latest/USD');
        const data = await response.json();
        
   
        const rates = data.conversion_rates;
        const favoritePairs = Object.entries(rates)
          .filter(([currency]) => favoriteCurrencies.includes(currency))
          .map(([currency, rate]) => `${currency}: ${rate}`);
        
        setFavorites(favoritePairs);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      id="favorite"
      className="justify-start bg-secondary bg-opacity-60 backdrop-blur-lg backdrop-saturate-200 border border-light border-opacity-30 p-6 rounded-lg w-full h-[300px] sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto my-4 shadow-lg font-sans"
    >
      <h2 className="text-lg font-semibold mb-3 text-gray-200 text-center opacity-80">
        Favorite Currency Pairs
      </h2>

      {loading ? (
        <p className="text-gray-300 text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {favorites.length > 0 ? (
            favorites.map((pair, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 border border-white border-opacity-30 p-3 rounded-md text-center shadow-sm text-gray-100"
              >
                {pair}
              </div>
            ))
          ) : (
            <p className="text-gray-300 col-span-2 text-center">
              No favorite pairs available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FavoriteCurrencyPairs;
