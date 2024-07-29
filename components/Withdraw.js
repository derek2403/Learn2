import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';


const Withdrawal = () => {
  const [coinValue, setCoinValue] = useState('');
  const [suiValue, setSuiValue] = useState(0);

  const handleCoinValueChange = (e) => {
    const value = e.target.value;
    setCoinValue(value);
    setSuiValue(value / 3000);
  };

  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Sedan+SC&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        <div className="exchangeContainer">
          <div className="field">
            <img src="/coin.png" alt="Coin" className="icon" />
            <input
              type="number"
              value={coinValue}
              onChange={handleCoinValueChange}
              className="input"
              placeholder="0"
            />
          </div>
          <span className="arrow">→</span>
          <div className="field sui">
            <img src="/sui.png" alt="Sui" className="icon" />
            <input
                type="number"
                value={suiValue}
                readOnly
                className="suiInput"
            />
          </div>
        </div>
        <div className="rateAndButtons">
          <div className="rateContainer">
            <div className="rate">Today rate<br/>3000 : 1 SUI</div>
            <div className="buttons">
              <button className="confirmButton">Withdraw</button>
              <button className="cancelButton" onClick={() => router.back()}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-image: url('/background2.jpg'); /* Place your second image in the public folder with this name */
          background-color: brown;
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;
          padding: 20px;
          font-family: 'Pixelify Sans', 'Courier New', Courier, monospace; /* Same font as SchoolTutorial */
        }
        .exchangeContainer {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .field {
          display: flex;
          flex-direction: column;          
          align-items: center;
          margin: 0 10px;
          width: 420px;
          height: 420px;
          background-color:#FFFFED;
          border-radius: 6px;
        }
        .icon {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        .input {
          width: 100px;
          padding: 3px 10px;
          font-size: 30px;
          text-align: center;
        }
        .suiInput {
          width: 100px;
          padding: 5px;
          font-size: 30px;
          text-align: center;
          border: none; /* Remove the border */
          background: transparent; /* Optional: make the background transparent */
        }
        .arrow {
          font-size: 200px;
          color: white;
          margin: 0 30px;
        }
        .rateAndButtons {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .rateContainer {
          background-color: white;
          padding: 21px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          border-radius: 5px;
        }
        .rate {
          color: black;
          flex: 1;
          text-align: left;
          font-size: 30px;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .confirmButton, .cancelButton {
          padding: 10px;
          font-size: 21px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          width: 210px;
          font-family: 'Pixelify Sans', 'Sedan SC', 'Courier New', Courier, monospace;
        }
        .confirmButton {
          background-color: green;
          color: white;
        }
        .cancelButton {
          background-color: red;
          color: white;
        }
      `}</style>
    </>
  );
}

export default Withdrawal;