import Commerce from '@chec/commerce.js';
import { truncateSync } from 'fs';

export const commerce = new Commerce(
	process.env.REACT_APP_CHEC_PUBLIC_KEY,
	truncateSync
);
