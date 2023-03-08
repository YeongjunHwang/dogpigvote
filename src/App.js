import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./bitcoin-logo.png";
import Voting from "./Voting";

const App = () => {
  const [price, setPrice] = useState(0);
  const [percent, setPercent] = useState(0);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT");
      const data = await response.json();
      setPrice(data.lastPrice);
      setPercent(data.priceChangePercent);
      setVolume(data.volume);
    };
    const intervalId = setInterval(fetchData, 500);
    return () => clearInterval(intervalId);
  }, []);

  const formattedPrice = typeof price === 'number' ? price.toFixed(2) : parseFloat(price).toFixed(2);
  const formattedPercent = typeof percent === 'number' ? percent.toFixed(2) : parseFloat(percent).toFixed(2);
  const formattedVolume = typeof volume === 'number' ? volume.toFixed(2) : parseFloat(volume).toFixed(2);
    
  return (
    <div className="container">
      <header className="header">
      </header>
      <main className="main">
      <img src={logo} alt="Bitcoin logo" className="logo" />
        <h1 className="price-header"> 
        <span style= {{color: 'orange'}}>Bitcoin Price: </span> 
        ${formattedPrice} <p/>
          전일대비: <span style={{ color: formattedPercent >= 0 ? '#2ebd85' : '#f5465c' }}>{formattedPercent}%</span> |
          거래대금 (BTC): {formattedVolume}</h1>
          <Voting />
      </main>
    </div>
  );
};

export default App;
