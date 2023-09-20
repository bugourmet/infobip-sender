import {
  MessagingServiceConfiguration,
  NumbersApi,
} from '../../types/service-types/service-types';
import { InfobipBaseService } from './base-service';

export class NumbersService extends InfobipBaseService implements NumbersApi {
  constructor(config: MessagingServiceConfiguration) {
    super(config);
  }

  async getPurchasedNumbers(): Promise<void> {
    return await this.sendApiRequest({
      apiKey: this.config.apiKey,
      baseUrl: this.config.baseUrl,
      method: 'GET',
      url: '/numbers/1/numbers',
    });
  }
}
