import { Router } from 'express';
import homeController from './controllers/home.controller';

export const router = Router();

router.get('/', homeController);
