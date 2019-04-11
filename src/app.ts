import express from 'express';
import helmet from 'helmet';
import path from 'path';
import handlebars from 'express-handlebars';

import { router } from './router';

const app: express.Application = express();

// Use helmet for security
app.use(helmet());

// register app routes
app.use(router);

// configure serving client as static files
app.use(express.static(path.join(__dirname, '/../public')));

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

export default app;
