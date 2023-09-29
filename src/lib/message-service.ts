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

export interface MessageSender {
  sms: SMSChannel;
  whatsapp: WhatsAppChannel;
  viber: ViberChannel;
  numbers: NumbersApi;
}

export class InfobipMessageService implements MessageSender {
  private config: MessagingServiceConfiguration;
  private smsInstance: SMSChannel;
  private whatsappInstance: WhatsAppChannel;
  private viberInstance: ViberChannel;
  private numbersInstance: NumbersApi;

  constructor(config: MessagingServiceConfiguration) {
    this.config = config;
    this.smsInstance = new SMSService(this.config);
    this.whatsappInstance = new WhatsAppService(this.config);
    this.viberInstance = new ViberService(this.config);
    this.numbersInstance = new NumbersService(this.config);
  }

  get sms(): SMSChannel {
    return this.smsInstance;
  }

  get whatsapp(): WhatsAppChannel {
    return this.whatsappInstance;
  }

  get viber(): ViberChannel {
    return this.viberInstance;
  }

  get numbers(): NumbersApi {
    return this.numbersInstance;
  }
}
