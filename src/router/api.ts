import { Router } from 'express';
import userRouter from '../components/user/userRouter';

const router = Router();

router.use('/user', userRouter);

export default router;