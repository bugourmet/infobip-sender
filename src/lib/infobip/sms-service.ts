import {
  Destination,
  MessagingServiceConfiguration,
  SMSChannel,
} from '../../types/service-types/service-types';
import { InfobipBaseService } from './base-service';

export class SMSService extends InfobipBaseService implements SMSChannel {
  constructor(config: MessagingServiceConfiguration) {
    super(config);
  }

  async sendSMS(
    sender: string,
    recipient: string | string[],
    message: string
  ): Promise<void> {
    const destinations: Destination[] = Array.isArray(recipient)
      ? recipient.map((to) => ({ to }))
      : [{ to: recipient }];

    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl,
      method: 'POST',
      url: '/sms/2/text/advanced',
      data: {
        messages: [
          {
            from: sender,
            destinations,
            text: message,
            ...(this.config.notifyUrl && {
              notifyUrl: this.config.notifyUrl,
            }),
          },
        ],
      },
    });
  }
}
