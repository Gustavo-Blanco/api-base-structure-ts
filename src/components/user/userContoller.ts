import { getId } from '../../helpers/reqMethods'
import { result } from '../../res/default';
import { Request, Response } from 'express';
import { allUsers, deleteUser, getUser, storeUser, updateUser } from './userDao';

export const all = async (req: Request, res: Response) => {
    try {
        const users = await allUsers();
        return result(res, users);
    } catch (error: any) {
        return result(res, null, false, error.toString());
    }
}

export const store = async (req: Request, res: Response) => {
    try {
        const user = await storeUser(req.body);
        return result(res, user);
    } catch (error: any) {
        return result(res, null, false, error.toString());
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const id = getId(req, 'id');
        const user = await updateUser(req.body, id);
        return result(res, user);
    } catch (error: any) {
        return result(res, null, false, error.toString());
    }
}

export const show = async (req: Request, res: Response) => {
    try {
        const id = getId(req, 'id');
        const user = await getUser(id);
        return result(res, user);
    } catch (error: any) {
        return result(res, null, false, error.toString());
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const id = getId(req, 'id');
        const user = await deleteUser(id);
        return result(res, user);
    } catch (error: any) {
        return result(res, null, false, error.toString());
    }
}
