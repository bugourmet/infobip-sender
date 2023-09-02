import * as os from 'os';
import AgentKeepAlive from 'agentkeepalive';

export const httpAgent = new AgentKeepAlive({
  maxSockets: 128 / os.cpus().length,
  maxFreeSockets: 128 / os.cpus().length,
  keepAlive: true,
});

export const httpsAgent = new AgentKeepAlive.HttpsAgent({
  maxSockets: 128 / os.cpus().length,
  maxFreeSockets: 128 / os.cpus().length,
  keepAlive: true,
});
