import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const carDatabase = [
  { name: 'Mc Laren', price: 1200, imageUrl: '/mclaren.png' },
  { name: 'Lamborghini', price: 1200, imageUrl: '/lamborghini.png' },
  { name: 'Ferrari', price: 1200, imageUrl: '/ferrari.png' },
  { name: 'BMW', price: 950, imageUrl: '/bmw.png' },
  { name: 'Mercedes', price: 900, imageUrl: '/mercedes.png' },
  { name: 'Porsche', price: 1000, imageUrl: '/porsche.png' },
  { name: 'Bentley', price: 2000, imageUrl: '/bentley.png' },
];

const Shop = () => {
  const [selectedCar, setSelectedCar] = useState(carDatabase[0]);
  const [balance, setBalance] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Fetch the coin balance from the API
    fetch('/api/getCoinBalance')
      .then((response) => response.json())
      .then((data) => setBalance(data.balance))
      .catch((error) => console.error('Error fetching coin balance:', error));
  }, []);

  const handlePurchase = async () => {
    if (balance < selectedCar.price) {
      alert('Insufficient balance to purchase this car.');
      return;
    }

    const response = await fetch('/api/updateCoinBalanceForPurchase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deductedCoins: selectedCar.price }),
    });

    if (response.ok) {
      const data = await response.json();
      setBalance(data.balance);
      alert('Purchase successful!');
      router.reload();  // Reload the page to update the balance
    } else {
      alert('Purchase failed. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Sedan+SC&display=swap" rel="stylesheet" />
      </Head>
      <style jsx>{`
        .shop-container {
          display: flex;
          background-color: #daa520;
          padding: 20px;
          border-radius: 10px;
          justify-content: center;
          align-items: center;
          font-family: 'Pixelify Sans', sans-serif;
          height: 100vh;
          position: relative;
        }

        .car-image-container {
          width: 45%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }

        .car-image {
          width: 80%;
          height: 200px;
          object-fit: cover;
          border-radius: 5px;
        }

        .purchase-button {
          display: block;
          width: 54%;
          padding: 10px;
          margin-top: 10px;
          background-color: #2e8b57;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 24px;
          font-family: 'Pixelify Sans', sans-serif;
        }

        .purchase-button:hover {
          background-color: #379B63;
        }

        .message {
          background-color: white;
          color: black;
          padding: 10px;
          border-radius: 15px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          margin-top: 60px;
          text-align: center;
          font-family: 'Pixelify Sans', sans-serif;
          font-size: 30px;
          height: 120px;
        }

        .car-list {
          width: 30%;
          background-color: brown;
          padding: 24px;
          height: 70%;
          overflow-y: auto;
        }

        .car-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffffe0;
          padding: 10px;
          cursor: pointer;
          font-size: 30px;
          border-radius: 5px;
          margin-bottom: 5px;
        }

        .car-item:nth-child(even) {
          background-color: brown;
          color: #ffffe0;
        }

        .car-item:hover {
          background-color: #f0e68c; /* Light Khaki for hover effect */
        }

        .car-item:nth-child(even):hover {
          background-color: #6C2819;
        }

        .car-item-name {
          flex: 1;
          text-align: left;
          padding-right: 10px;
        }

        .car-item-price {
          flex: 0 0 auto;
          text-align: right;
          white-space: nowrap;
        }
      `}</style>
      <div className="shop-container">
        <div className="car-image-container">
          <img
            src={selectedCar.imageUrl}
            alt={selectedCar.name}
            className="car-image"
          />
          <button className="purchase-button" onClick={handlePurchase}>Purchase</button>
          <div className="message">
            Make your favourite car in your collection...
          </div>
        </div>
        <div className="car-list">
          {carDatabase.map((car, index) => (
            <div
              key={index}
              className="car-item"
              onClick={() => setSelectedCar(car)}
            >
              <div className="car-item-name">
                {index + 1}. {car.name}
              </div>
              <div className="car-item-price">
                ${car.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
