import { Request, Response } from 'express';

/**
 * Page Not Found - add wild card to end of routes
 */
const controller = (req: Request, res: Response) => {
    res.status(404).render('not-found', {
        title: 'Page Not Found'
    });
};

export default controller;
