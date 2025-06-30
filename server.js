const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let orders = [];

app.post('/api/orders', (req, res) => {
    const newOrder = {
        _id: orders.length + 1,
        ...req.body,
        createdAt: new Date().toISOString()
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

app.get('/api/orders', (req, res) => {
    res.json(orders);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
