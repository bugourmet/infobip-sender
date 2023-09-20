interface Destinations {
  to: string;
}
interface InfobipSmsPayload {
  messages: Destinations[];
  from: string;
  text: string;
  notifyUrl?: string;
}

interface InfobipViberPayload {}

interface InfobipWhatsAppPayload {}

export type InfobipPayload =
  | InfobipSmsPayload
  | InfobipWhatsAppPayload
  | InfobipViberPayload;
