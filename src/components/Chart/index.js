import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {useEffect, useState} from "react";
import api from "../services/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart= () => {
    const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'bottom',
        },
        title: {
        display: true,
        text: 'Moedas Euro e Dólar',
        },
    },
    };

    const labels = ['Hoje','Ontem', 'Anteontem'];
	const  [dolar] = useState([]);
	const  [euro] = useState([]);

    useEffect(() => {
        api.get("/json/daily/EUR-BRL/3")
        .then(({data})=>{
            data.forEach((elemento)=>{
                euro.push(elemento.bid);
            })
        })
    },[]);

    useEffect(() => {
        api.get("/json/daily/USD-BRL/3")
        .then(({data})=>{
            console.log(data)
            data.forEach((elemento)=>{
                dolar.push(elemento.bid)
                console.log(elemento.bid)
            })
        })
    },[]);


    const data = {
        labels,
        datasets: [
        {
            label: 'Dolar',
            data: dolar,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Euro',
            data: euro,
            borderColor: 'rgb(0, 225, 132)',
            backgroundColor: 'rgba(0, 225, 132, 0.5)',
        },
        ],
    };
    
    return <Line options={options} data={data} />;
}

export default Chart;