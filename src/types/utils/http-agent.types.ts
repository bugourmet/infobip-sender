import { InfobipPayload } from "../infobip-types/payload-types/payload-types";
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface HttpRequestConfig {
  apiKey: string;
  baseUrl: string;
  method: HttpMethod;
  url: string;
  query?: Record<string, string>;
  data?: InfobipPayload;
}
