import axios from 'axios';

import { httpAgent, httpsAgent } from './http-agent.util';

const clientConfig = {
  httpAgent,
  httpsAgent,
};

export const httpClient = axios.create(clientConfig);
