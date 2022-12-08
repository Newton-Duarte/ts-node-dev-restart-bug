import 'reflect-metadata';
import express from 'express';
import { router } from '@shared/routes';

import '@shared/container';

const app = express();

app.use(router);

app.listen(3500, () => console.log('app running on port 3500'));