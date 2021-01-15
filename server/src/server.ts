import express from 'express'; //usar o yarn add @types/express para reconhecer a tipagem
import cors from 'cors';
import routes from './routes';

const app = express(); // criando uma variável igual função express

app.use(cors());
app.use(express.json());
app.use(routes);


app.get('/', (request, response) => {
console.log(request.query); //(reques body) dados para criação ou atua de registro




    return response.json({message: 'Hello World'});
        
});


app.listen(3333); //metódo listen e usando a porta "localhost" 3333, se não tiver use a padrão 80

