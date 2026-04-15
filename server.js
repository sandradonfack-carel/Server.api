const express = require('express');
const app = express();

app.use(express.json());

const coursesRouter = require('./routes/courses'); 
app.use('/api/courses', coursesRouter);

app.get('/', (req, res) => {
    res.json({
        message: 'BIEN VENU DANS MON SERVEUR',
    });
});

app.use((req, res) => {
    res.status(404).json({ error: 'route non trouvee' })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running for http://localhost:${PORT}`)
});
