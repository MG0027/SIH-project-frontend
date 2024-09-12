import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const WeatherDistributionPieChart = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
                    params: {
                        q: 'Delhi',
                        appid: '9e3396d36e24e286cfd4cebfc00ca794', // Replace with your actual API key
                        units: 'metric'
                    }
                });

                const forecast = response.data.list;
                const weatherCounts = {};

                forecast.forEach((entry) => {
                    const condition = entry.weather[0].main;
                    weatherCounts[condition] = (weatherCounts[condition] || 0) + 1;
                });

                const weatherArray = Object.keys(weatherCounts).map((key) => ({
                    name: key,
                    value: weatherCounts[key]
                }));

                setWeatherData(weatherArray);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchData();
    }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FDC', '#FF6699'];

    return (
        <PieChart width={200} height={200}>
            <Pie
                data={weatherData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {weatherData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    );
};

export default WeatherDistributionPieChart;
