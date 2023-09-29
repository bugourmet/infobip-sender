import { TemplateData } from "../request-types";

interface InfobipWhatsAppTextPayload {
  from: string;
  to: string;
  message: string;
}

interface InfobipWhatsAppDocumentPayload {
  // same for audio/video
  from: string;
  to: string;
  content: {
    mediaUrl: string;
  };
  notifyUrl?: string;
}

interface InfobipWhatsAppImagePayload {
  from: string;
  to: string;
  content: {
    mediaUrl: string;
    caption?: string;
  };
  notifyUrl?: string;
}

interface WhatsAppTemplateMessage {
  from: string;
  to: string;
  content: {
    templateName: string;
    templateData: TemplateData;
    language: string;
  };
  notifyUrl?: string;
}

interface InfobipWhatsAppTemplatePayload {
  messages: WhatsAppTemplateMessage[];
}

export type InfobipWhatsAppPayload =
  | InfobipWhatsAppTextPayload
  | InfobipWhatsAppDocumentPayload
  | InfobipWhatsAppImagePayload
  | InfobipWhatsAppTemplatePayload;
