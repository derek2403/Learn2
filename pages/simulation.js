import Head from 'next/head';
import FloatingLoginButton from '../components/FloatingLoginButton';
import FloatingBalance from '../components/FloatingBalance';

export default function Simulation() {
  return (
    <div className="container">
      <FloatingBalance />
      <FloatingLoginButton />
      <Head>
        <title>Trade Decision</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Sedan+SC&display=swap" rel="stylesheet" />
      </Head>

      <div className="header">
        You have 5000 coins to invest in the stocks below. Check out the trends from the previous week and decide which stock to invest in. Choose wisely!
      </div>

      <div className="box-container">
        <div className="box">
          <img src="/bull.png" alt="Green Box Image" />
        </div>
        <div className="box">
          <img src="/bear.png" alt="Red Box Image" />
        </div>
      </div>

      <div className="footer">
        <p>Press [L] to choose left path</p>
        <p>Press [R] to choose right path</p>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: 'Pixelify Sans', sans-serif;
          align-items: center;
          height: 97vh;
          background-image: url('/road.png');
          background-size: cover;   
          background-position: center;
        }
        .header, .footer {
          background-color: lightgray;
          border: 1px solid gray;
          box-sizing: border-box;
        }
        .header {
          margin-top: 20px;
          font-size: 25px;
          text-align: center;
          padding: 30px 0px 30px 0px;
          max-width: 70%;
        }
        .footer {
          font-size: 25px;
          text-align: left;
          width: 80%;
          padding-left: 16px;
        }
        .box-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 55%;
          padding: 20px 0;
          box-sizing: border-box;
        }
        .box {
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ccc;
        }
        img {
          max-width: 100%;
          max-height: 100%;
          border: 10px solid #ccc;
        }
      `}</style>
    </div>
  );
}
