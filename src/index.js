import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


/*

programa feito a partir deste vídeo: https://youtu.be/IaJqMcOMuDM

pacotes exigidos para rodar (foram instalados durante a construção do código):
    
    npm install --save axios        //o axios faz requisições GET para a API de meteorologia

modificações adicionais para o app funcionar (que o vídeo não especificou):

    No arquivo package.json (global), logo abaixo da primeira linh (app-name), adicionar:
    
    "homepage": ".",

    Sem esta linha, aa pasta build leva a uma página em branco quando tentamos acessar seu index.html. 
    Após esta mudança tudo transcorreu normalmente.
*/