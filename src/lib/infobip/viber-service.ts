import {
  MessagingServiceConfiguration,
  ViberChannel,
} from '../../types/service-types/service-types';
import { InfobipBaseService } from './base-service';

export class ViberService extends InfobipBaseService implements ViberChannel {
  constructor(config: MessagingServiceConfiguration) {
    super(config);
  }

  async sendText(
    from: string,
    to: string | string[],
    message: string
  ): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl,
      method: 'POST',
      url: '/viber/1/message/text',
      data: {
        messages: [
          {
            from,
            to,
            content: {
              text: message,
            },
          },
        ],
      },
    });
  }

  async sendFile(
    from: string,
    to: string,
    filename: string,
    mediaUrl: string
  ): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl,
      method: 'POST',
      url: '/viber/1/message/file',
      data: {
        from,
        to,
        content: {
          filename,
          mediaUrl,
        },
      },
    });
  }

  async sendVideo(
    from: string,
    to: string,
    thumbnailUrl: string,
    mediaUrl: string,
    mediaDuration: number,
    caption?: string,
    buttonTitle?: string
  ): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl,
      method: 'POST',
      url: '/viber/1/message/video',
      data: {
        from,
        to,
        content: {
          ...(caption && {
            text: caption,
          }),
          mediaUrl,
          thumbnailUrl,
          mediaDuration,
          ...(buttonTitle && {
            buttonTitle,
          }),
        },
      },
    });
  }

  async sendImage(
    from: string,
    to: string,
    imageUrl: string,
    caption?: string
  ): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl,
      method: 'POST',
      url: '/viber/1/message/image',
      data: {
        from,
        to,
        content: {
          from,
          to,
          content: {
            ...(caption && {
              text: caption,
            }),
            mediaUrl: imageUrl,
          },
        },
      },
    });
  }

  async sendButtonMessage(
    from: string,
    to: string,
    message: string,
    buttonText: string,
    buttonAction: string,
    imageUrl?: string
  ): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl,
      method: 'POST',
      url: '/viber/1/message/image',
      data: {
        from,
        to,
        content: {
          text: message,
          ...(buttonText &&
            buttonAction && { title: buttonText, action: buttonAction }),
          ...(imageUrl && { mediaUrl: imageUrl }),
        },
        ...(this.config.notifyUrl && {
          notifyUrl: this.config.notifyUrl,
        }),
      },
    });
  }
}
