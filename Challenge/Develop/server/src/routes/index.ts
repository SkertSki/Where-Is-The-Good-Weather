import { Router } from 'express';
const router = Router();

import apiRoutes from './api/indexDONE.js';
import htmlRoutes from './htmlRoutesDONE.js';

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

export default router;
