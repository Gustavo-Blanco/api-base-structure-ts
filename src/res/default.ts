import { Response } from 'express';
import { defaultRes } from './structure';

export const errorDefault = (message: string) => message;

export const result = (
    res: Response,
    data: any,
    ok: boolean = true,
    message: string = 'success'): Response<defaultRes> => {
    return res.json({
        ok,
        data,
        message
    });
}