import {
  MessagingServiceConfiguration,
  NumbersApi,
  SMSChannel,
  ViberChannel,
  WhatsAppChannel,
} from "../types/service-types/service-types";
import {
  NumbersService,
  SMSService,
  ViberService,
  WhatsAppService,
} from "./infobip/index";

export class InfobipMessageSender {
  private config: MessagingServiceConfiguration;

  constructor(config: MessagingServiceConfiguration) {
    this.config = config;
  }

  get sms(): SMSChannel {
    return new SMSService(this.config);
  }

  get whatsapp(): WhatsAppChannel {
    return new WhatsAppService(this.config);
  }

  get viber(): ViberChannel {
    return new ViberService(this.config);
  }

  get numbers(): NumbersApi {
    return new NumbersService(this.config);
  }

  // TODO
  // RCS
  // VOICE
  // MMS
}
