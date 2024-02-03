const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
app.use(cors());
app.get('/api/data', (req, res) => {
    const data = require('./data.json');
    res.json(data);
});

app.listen(port, () => {
    console.log('Server running');
});