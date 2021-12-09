/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { request } from 'src/utils/request';

const countCities = async () => await request<number>('/api/villes/count', { method: 'GET' });

export { countCities };