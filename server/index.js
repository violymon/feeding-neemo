const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/products', (req, res) => {
    console.log('GET Request to /api/products')
    res.json([{
        "id": 1,
        "type": "Rind",
        "shop": "Katzenkontor",
        "price": "3,25€"
    }]);
})

app.listen(8081, () => console.log('Server listening at http://localhost:8081.'))