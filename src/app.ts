import express from 'express';
import helmet from 'helmet';
import path from 'path';
import handlebars from 'express-handlebars';
import compression from 'compression';

import { router } from './router';

const app: express.Application = express();

// Use helmet for security
app.use(helmet());

// configure serving client as static files
app.use(express.static(path.join(__dirname, '/../public/')));

// register app routes
app.use(router);

// Express configuration
app.set('port', process.env.PORT || 8080);
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/../views/layouts'
  })
);
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'hbs');
app.use(compression());

export default app;
