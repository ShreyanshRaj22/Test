const express = require('express')
const app = express()
const cors = require("cors");
app.use(cors())
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send("Server is running")
})
app.use(express.json())

app.get('/api/data', (req, res) => {
    try {
        const data = require('./STUDENTS_MOCK_DATA.json');
        res.json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})

app.listen(5000, () => {
    console.log("Running")
})