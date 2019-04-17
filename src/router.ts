import { Router } from 'express';
import homeController from './controllers/home.controller';
import pageNotFoundController from './controllers/page-not-found.controller';

export const router = Router();

router.get('/', homeController);
router.get('*', pageNotFoundController);
