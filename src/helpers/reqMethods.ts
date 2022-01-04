import { Request } from 'express';

export const getId = (req: Request, key: string) => {
    const id = Number(req.params[key]);
    return id;
};