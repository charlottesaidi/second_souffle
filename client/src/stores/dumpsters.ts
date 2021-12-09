/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dumpster } from 'src/types/dumpster';
import { request } from 'src/utils/request';

const getAllDumpsters = async () => await request<Dumpster[]>('/api/records', { method: 'GET' });

export { getAllDumpsters };