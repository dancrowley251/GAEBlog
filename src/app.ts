import express from 'express';
import helmet from 'helmet';
import path from 'path';
import handlebars from 'express-handlebars';

import * as homeController from './controllers/home.controller';

const app: express.Application = express();

// Use helmet for security
app.use(helmet());

// Express configuration
app.set('port', process.env.PORT || 8080);
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts'
  })
);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.get('/', homeController.index);

export default app;
