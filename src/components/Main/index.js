import React, {useEffect, useState} from "react";
import api from "../services/api";
import './style.css'
import Chart from '../Chart/index'

const Main = () => {
	const [dolar, setDolar] = useState()
    const [dolarOntem, setDolarOntem] = useState()
    const [euro, setEuro] = useState()
    const [euroOntem, setEuroOntem] = useState()
    const [dia, setDia] = useState()

	useEffect(() => {
		api.get("/json/daily/USD-BRL/1")
			.then((response) => {
				console.log(response.data[0].bid)
				setDolar(response.data[0].bid)
			}) 
			.catch((err) => {
				console.error("deu ruim!" + err);
			});
  	}, []);
      
      useEffect(() => {
		api.get("/json/daily/USD-BRL/2")
			.then((response) => {
				console.log('Ontem',response.data[1].bid)
				setDolarOntem(response.data[1].bid)
			}) 
			.catch((err) => {
				console.error("deu ruim!" + err);
			});
  	}, []);

    useEffect(() => {
        api.get("/json/daily/EUR-BRL/1")
            .then((response) => {
                console.log(response.data[0].bid)
                setEuro(response.data[0].bid)
            }) 
            .catch((err) => {
                console.error("deu ruim!" + err);
            });
    }, []);

    useEffect(() => {
        api.get("/json/daily/EUR-BRL/2")
            .then((response) => {
                console.log('Ontem',response.data[1].bid)
                setEuroOntem(response.data[1].bid)
            }) 
            .catch((err) => {
                console.error("deu ruim!" + err);
            });
    }, []);

    useEffect(() => {
		api.get("/json/daily/USD-BRL/1")
			.then((response) => {
				console.log(response.data[0].create_date)
				setDia(response.data[0].create_date)
			}) 
			.catch((err) => {
				console.error("deu ruim!" + err);
			});
  	}, []);

    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Olá, Administrador Internacional</h1>
                        <p>Bem vindo ao painel da empresa</p>
                    </div>
                </div>
                
                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i> 
                        <div className="card_inner">
                            <p className="text-primary-p">Número de pedidos</p>
                            <span className="font-bold text-title">  578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-money fa-2x text-red"></i> 
                        <div className="card_inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$2.456</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Valor da Moeda nos últimos 5 dias</h1>
                                <p></p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>
                    
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Valor da Moeda</h1>
                                <p>No momento: {dia} </p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Dolar Hoje</h1>
                                <p>{dolar}</p>
                            </div>

                            <div className="card2">
                                <h1>Euro Hoje</h1>
                                <p>{euro}</p>
                            </div>
                            <div className="card1">
                                <h1>Dolar Ontem</h1>
                                <p>{dolarOntem}</p>
                            </div>
                            <div className="card2">
                                <h1>Euro Ontem</h1>
                                <p>{euroOntem}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;