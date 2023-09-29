import { MessagingServiceConfiguration } from "../../types/service-types/service-types";
import { HttpRequestConfig } from "../../types/utils/http-agent.types";
import { httpClient } from "../../utils/http-client/http-client.util";

export class InfobipBaseService {
  constructor(protected config: MessagingServiceConfiguration) {}

  protected async sendApiRequest(config: HttpRequestConfig) {
    const { apiKey, baseUrl, method, url, query, data } = config;

    const response = await httpClient.request({
      method,
      url: baseUrl
        ? `https://${baseUrl}${url}`
        : `https://api.infobip.com${url}`,
      headers: this.appendHeaders(apiKey),
      params: {
        ...query,
        ...(method === "POST" && this.addAnalytics()),
      },
      ...(method === "POST" && {
        data: {
          ...data,
          ...(this.config.notifyUrl && {
            notifyUrl: this.config.notifyUrl,
          }),
        },
      }),
    });

    return response.data;
  }

  private appendHeaders(apiKey?: string) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `App ${apiKey || ""}`,
    };
  }

  private addAnalytics() {
    const { piIntegrator, piPlatform } = this.config;
    if (piIntegrator && piPlatform) {
      return {
        piIntegrator,
        piPlatform,
      };
    }

    return null;
  }
}
