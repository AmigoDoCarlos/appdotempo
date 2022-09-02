import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather"       //api que fornece as informações de tempo na cidade pesquisada
const APIkey = "c3b91e9e735a803d1873b6014e9068f5";                  //chave de validação da pesquisa (solicitada pela própria URL)


export default async function fetchWeather(cidade){         //function para obter as informações do tempo - o argumento é a cidade pesquisada
    const {data} = await axios.get(
        URL, {
        params: {
            q: cidade,
            units: 'metric',
            APPID: APIkey
        }
    });
    return data;
}









/* alternativamente pode-se fazer a função acima em arrow function:

export const fetchWeather = async (cidade) => {             //arrow function para obter as informações do tempo - o argumento é a cidade pesquisada
    const {data} = await axios.get(
        URL, {
        params: {
            q: cidade,
            units: 'metric',
            APPID: APIkey
        }
    });

    return data;
} 

*/