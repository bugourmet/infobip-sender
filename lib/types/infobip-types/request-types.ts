export interface TemplateData {
  header?: WhatsAppHeader;
  body: {
    placeholders: string[];
    buttons?: WhatsAppButton[];
  };
}

export interface WhatsAppButton {
  type: string;
  parameter?: string;
  text?: string;
}

interface WhatsAppBaseHeader {
  type: string;
}

export interface WhatsAppTextHeader extends WhatsAppBaseHeader {
  placeholder: string;
}

export interface WhatsAppDocumentHeader extends WhatsAppBaseHeader {
  mediaUrl: string;
  filename: string;
}

export interface WhatsAppImageAndVideoHeader extends WhatsAppBaseHeader {
  mediaUrl: string;
}

export interface WhatsAppLocationHeader extends WhatsAppBaseHeader {
  latitude: number;
  longitude: number;
}

type WhatsAppHeader =
  | WhatsAppTextHeader
  | WhatsAppDocumentHeader
  | WhatsAppImageAndVideoHeader
  | WhatsAppLocationHeader;
