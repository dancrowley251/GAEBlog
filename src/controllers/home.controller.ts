import { Request, Response } from 'express';

/**
 * GET /
 * Home page.
 */
export const controller = (req: Request, res: Response) => {
  res.render('home', {
    title: 'Home'
  });
};

export default controller;
