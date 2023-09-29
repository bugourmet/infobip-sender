import { Destination } from "../../service-types/service-types";

interface InfobipSmsMessage {
  from: string;
  destinations: Destination[];
  text: string;
  notifyUrl?: string;
}

export interface InfobipSmsPayload {
  messages: InfobipSmsMessage[];
}
