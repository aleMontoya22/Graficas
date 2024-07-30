import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, BarElement, scales, Legend, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = () => {

    const [chart, setChart] = useState([]);

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    var apiKey = "coinranking54d697368ffdd381a94952dcb55515fa041fa2712c2dcbe3";

    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${proxyUrl}${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin': "*"
                }
            })
                .then((response) => {
                    if (response.ok) {
                        response.json().then((json) => {
                            console.log(json.data);
                            setChart(json.data)
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                });
        };
        fetchCoins()
    }, [baseUrl, proxyUrl, apiKey])

    console.log("chart", chart);
    var data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
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
        }]
    }

    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        Legend: {
            labels: {
                fontSize: 26
            }
        }
    }
    return (
        <div>
            <Bar
                data={data}
                height={400}
                options={options}
            />
        </div>
    )
}

export default BarChart;