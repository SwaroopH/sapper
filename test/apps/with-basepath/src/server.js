import sirv from 'sirv';
import polka from 'polka';
import * as sapper from '@sapper/server';

import { start, dev } from '../../common.js';

const app = polka()
	.use(
		'custom-basepath',
		sirv('static', { dev }),
		sapper.middleware()
	);

start(app);

