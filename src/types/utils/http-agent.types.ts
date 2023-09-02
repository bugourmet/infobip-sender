export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface HttpRequestConfig {
  apiKey: string;
  baseUrl: string;
  method: HttpMethod;
  url: string;
  query?: Record<string, string>;
  data?: any; // TODO add InfobipPayload types
}
