require('dotenv').config();
const express = require('express'); 
const cors = require('cors');

const express = require('./src/routes/routes');

const router = require('./src/routes/routes');


const app = express(); 
app.use(cors()); 
app.use(express.json()); 
app.use(router)

const porta = process.env.PORT || 3333;

app.listen(porta, () => {
    console.log(`Servidor iniciado em http://localhost:${porta}`);
});

app.get('/', (request, response) => {
    response.send('Hello World');
});


