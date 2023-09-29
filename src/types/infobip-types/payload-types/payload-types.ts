import { InfobipSmsPayload } from "./sms-payload-types";
import { InfobipViberPayload } from "./viber-payload-types";
import { InfobipWhatsAppPayload } from "./whatsapp-payload-types";

export type InfobipPayload =
  | InfobipSmsPayload
  | InfobipWhatsAppPayload
  | InfobipViberPayload;
