import express from 'express';
import helmet from 'helmet';

const app: express.Application = express();

// Use helmet for security
app.use(helmet());

// Express configuration
app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.send('The Google App Engine Blog!');
});

export default app;
