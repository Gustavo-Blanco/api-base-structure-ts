import { Router } from 'express'
import { all, remove, show, store, update } from './userContoller';

const router = Router();

router.route('/all').get(all);
router.route('/store').post(store);
router.route('/update/:id').put(update);
router.route('/show/:id').get(show);
router.route('/remove/:id').delete(remove);

export default router;