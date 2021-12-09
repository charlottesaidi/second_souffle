/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { request } from 'src/utils/request';

const countUsers = async () => await request<number>('/api/users/count', { method: 'GET' });

export { countUsers };