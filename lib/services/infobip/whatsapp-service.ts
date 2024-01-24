import { TemplateData } from "../../types/infobip-types/request-types";
import {
  MessagingServiceConfiguration,
  WhatsAppChannel,
} from "../../types/service-types/service-types";
import { InfobipBaseService } from "./base-service";

export class WhatsAppService
  extends InfobipBaseService
  implements WhatsAppChannel
{
  constructor(config: MessagingServiceConfiguration) {
    super(config);
  }

  async sendText(from: string, to: string, message: string): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl ?? "api.infobip.com",
      method: "POST",
      url: `/whatsapp/1/message/text`,
      data: {
        from,
        to,
        content: {
          text: message,
        },
      },
    });
  }

  async sendDocument(
    from: string,
    to: string,
    mediaUrl: string
  ): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl ?? "api.infobip.com",
      method: "POST",
      url: `/whatsapp/1/message/document`,
      data: {
        from,
        to,
        content: {
          mediaUrl,
        },
      },
    });
  }

  async sendImage(
    from: string,
    to: string,
    mediaUrl: string,
    caption?: string
  ): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl ?? "api.infobip.com",
      method: "POST",
      url: `/whatsapp/1/message/image`,
      data: {
        from,
        to,
        content: {
          mediaUrl,
          ...(caption && {
            caption,
          }),
        },
      },
    });
  }

  async sendAudio(from: string, to: string, mediaUrl: string): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl ?? "api.infobip.com",
      method: "POST",
      url: `/whatsapp/1/message/audio`,
      data: {
        from,
        to,
        content: {
          mediaUrl,
        },
      },
    });
  }

  async sendVideo(from: string, to: string, mediaUrl: string): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl ?? "api.infobip.com",
      method: "POST",
      url: `/whatsapp/1/message/video`,
      data: {
        from,
        to,
        content: {
          mediaUrl,
        },
      },
    });
  }

  async sendTemplateMessage(
    sender: string,
    recipient: string,
    templateName: string,
    templateLanguage: string,
    templateData?: TemplateData
  ): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl ?? "api.infobip.com",
      method: "POST",
      url: `/whatsapp/1/message/template`,
      data: {
        messages: [
          {
            from: sender,
            to: recipient,
            content: {
              templateName,
              ...(templateData && { templateData }),
              language: templateLanguage,
            },
          },
        ],
      },
    });
  }

  async getTemplates(sender: string): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl ?? "api.infobip.com",
      method: "GET",
      url: `/whatsapp/2/senders/${sender}/templates`,
    });
  }
}
