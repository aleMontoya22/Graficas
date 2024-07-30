import React, { useEffect, useState } from 'react';

const Home = () => {
    const [cryptoInfo, setCryptoInfo] = useState([]);

    const baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiKey = "coinranking54d697368ffdd381a94952dcb55515fa041fa2712c2dcbe3";

    useEffect(() => {
        const fetchCryptoInfo = async () => {
            try {
                const response = await fetch(`${proxyUrl}${baseUrl}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': `${apiKey}`,
                        'Access-Control-Allow-Origin': "*"
                    }
                });
                if (response.ok) {
                    const json = await response.json();
                    setCryptoInfo(json.data.coins);
                } else {
                    console.error("Response not OK:", response.status);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchCryptoInfo();
    }, [baseUrl, proxyUrl, apiKey]);

    return (
        <div className="home-container">
            <h1>Información General de Criptomonedas</h1>
            <ul className="crypto-list">
                {cryptoInfo.map(coin => (
                    <li key={coin.id} className="crypto-item">
                        <h2>{coin.name}</h2>
                        <p>Precio: ${parseFloat(coin.price).toFixed(2)}</p>
                        <p>Capitalización de mercado: ${coin.marketCap}</p>
                        <p>Ranking: {coin.rank}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
