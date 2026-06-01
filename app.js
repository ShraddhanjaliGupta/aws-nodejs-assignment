const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`
        <h1>AWS Assignment Application</h1>
        <h2>Elastic Beanstalk Deployment Successful</h2>
        <p>Node.js + Express Application Running</p>
    `);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        application: 'AWS Assignment',
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});