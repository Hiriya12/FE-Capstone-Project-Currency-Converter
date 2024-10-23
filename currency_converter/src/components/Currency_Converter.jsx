import React, { useEffect, useState } from 'react';
import CurrencyDropdown from './Dropdown';
import { HiArrowsRightLeft } from 'react-icons/hi2';

const Currency_Converter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [conversionRates, setConversionRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("ETB");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [converting, setConverting] = useState(false);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || ["INR", "EUR"]);

  const fetchCurrencies = async () => {
    try {
    //  const res = await fetch('https://v6.exchangerate-api.com/v6/5b8902368ceafabec84910c9/latest/USD');
      const data = await res.json();
      setCurrencies(Object.keys(data.conversion_rates));
      setConversionRates(data.conversion_rates);
    } catch (error) {
      console.error("Error fetching currencies", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const convertFromAmount = (inputAmount) => {
    if (!inputAmount || isNaN(inputAmount) || inputAmount <= 0) {
      setConvertedAmount("");
      return;
    }
    setConverting(true);
    try {
      const fromRate = conversionRates[fromCurrency];
      const toRate = conversionRates[toCurrency];

      if (fromRate && toRate) {
        const rate = (toRate / fromRate) * inputAmount;
        setConvertedAmount(rate.toFixed(2));
      } else {
        setConvertedAmount("Error converting currency");
      }
    } catch (error) {
      console.error("Error during conversion", error);
      setConvertedAmount("Error during conversion");
    } finally {
      setConverting(false);
    }
  };

  const convertToAmount = (inputConvertedAmount) => {
    if (!inputConvertedAmount || isNaN(inputConvertedAmount) || inputConvertedAmount <= 0) {
      setAmount("");
      return;
    }
    setConverting(true);
    try {
      const fromRate = conversionRates[fromCurrency];
      const toRate = conversionRates[toCurrency];

      if (fromRate && toRate) {
        const rate = (fromRate / toRate) * inputConvertedAmount;
        setAmount(rate.toFixed(2));
      } else {
        setAmount("Error converting currency");
      }
    } catch (error) {
      console.error("Error during conversion", error);
      setAmount("Error during conversion");
    } finally {
      setConverting(false);
    }
  };

  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorites];
    if (favorites.includes(currency)) {
      updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);
    } else {
      updatedFavorites.push(currency);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    convertFromAmount(amount); 
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    convertFromAmount(value); 
  };

  const handleConvertedAmountChange = (e) => {
    const value = e.target.value;
    setConvertedAmount(value);
    convertToAmount(value); 
  };

  return (
    <div className='flex justify-center overflow-hidden w-full '>
       <div className="bg-[url('public/image/photo.png')] bg-auto bg-top bg-right bg-no-repeat w-full min-h-[500px] sm:h-[600px] md:h-[700px] shadow-md relative">
          {/* <div className='w-full sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[1148px] h-auto mx-auto p-6 rounded-[50px] mb-5 text-xl bg-secondary mt-3'> */}
              <div className='bg-light border-[rgba(144,230,144,1)] border-8  relative p-6 sm:p-8 md:p-10 shadow-lg max-w-full md:max-w-[900px] lg:max-w-[1130px] h-auto mx-auto my-10 rounded-[50px] md:rounded-[75px] mb-5 text-xl text-black-200'>
                    <div className='p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-end'>

            <CurrencyDropdown
              favorites={favorites}
              currencies={currencies}
              title="From:"
              currency={fromCurrency}
              setCurrency={setFromCurrency}
              handleFavorite={handleFavorite}
              className='border border-black rounded-md shadow-sm focus:ring-2 focus:ring-gray-500 mt-1' 
            />
            <div className='flex items-center justify-between -mb-5 sm:mb-0'>
            </div>
            <CurrencyDropdown
              favorites={favorites}
              currencies={currencies}
              title="To:"
              currency={toCurrency}
              setCurrency={setToCurrency}
              handleFavorite={handleFavorite}
              className='border border-black rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 mt-1'
            />
          </div>
          <div className='flex items-center justify-between mt-4'>
            <div className='w-full'>
              <label
                htmlFor='amount'
                className='block text-sm font-medium text-black-700'
              >
                Amount:
              </label>
              <input
                value={amount}
                onChange={handleAmountChange}
                type='number'
                className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 mt-1'
              />
            </div>
            <div className='flex justify-center mx-4'>
              <button
                onClick={swapCurrencies}
                className='p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300'
                aria-label="Swap currencies"
              >
                <HiArrowsRightLeft className='text-xl text-gray-700' />
              </button>
            </div>
            <div className='w-full'>
              <label
                htmlFor='convertedAmount'
                className='block text-sm font-medium text-black-700'
              >
                Converted Amount:
              </label>
              <input
                value={convertedAmount}
                onChange={handleConvertedAmountChange} 
                type='number' 
                className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gray-500 mt-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  // </div>
  );
};

export default Currency_Converter;