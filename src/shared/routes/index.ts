import { Router } from 'express';
import { usersRoutes } from '@modules/users/infra/http/routes/users.routes';

const router = Router();

router.get('/', (req, res) => res.json({ message: 'hello world' }));
router.use('/users', usersRoutes);

export { router };
