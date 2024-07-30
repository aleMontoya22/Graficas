import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Legend
);

const BarChart = () => {
    const [chart, setChart] = useState({ coins: [] });

    const baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiKey = "coinranking54d697368ffdd381a94952dcb55515fa041fa2712c2dcbe3";

    useEffect(() => {
        const fetchCoins = async () => {
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
                    setChart(json.data);
                } else {
                    console.error("Response not OK:", response.status);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchCoins();
    }, [baseUrl, proxyUrl, apiKey]);

    const data = {
        labels: chart?.coins?.map(x => x.name),
        datasets: [{
            label: `${chart.coins.length} Coins Available`,
            data: chart?.coins?.map(x => parseFloat(x.price)),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }]
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    };

    return (
        <div className="graph-container">
            <h1>Gráfico de barras</h1>
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
}

export default BarChart;
