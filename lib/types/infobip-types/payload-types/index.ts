import { InfobipSmsPayload } from "./sms-payload";
import { InfobipViberPayload } from "./viber-payload";
import { InfobipWhatsAppPayload } from "./whatsapp-payload";

export type InfobipPayload =
  | InfobipSmsPayload
  | InfobipWhatsAppPayload
  | InfobipViberPayload;
