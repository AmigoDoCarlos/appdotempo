import React, { useState } from "react";
import fetchWeather from './api/fetchWeather.js';
import './App.css';

export default function App(){
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
   
    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query);
            setWeather(data);                                   //
            setQuery('');                                       //limpeza da query para o recebimento de novas requisições futuras
        }
    }
   
    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="Entre com uma cidade... "
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}                             //quando o usuário estiver com foco neste input e pressionar qualquer tecla, a "função" search é chamada.
            />

            {weather.main && (                                  //se a função main foi criada, então já temos o resultado da pesquisa da cidade                 
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country }</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        &nbsp;&deg;C
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}

        </div>
    )
}