import express from 'express';

const app: express.Application = express();

// Express configuration
app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.send('🎉 Hello TypeScript! 🎉');
});

export default app;
