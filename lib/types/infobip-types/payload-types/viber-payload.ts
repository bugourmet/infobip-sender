interface ViberTextContent {
  from: string;
  to: string | string[];
  content: {
    text: string;
  };
}

interface InfobipViberTextPayload {
  messages: ViberTextContent[];
  notifyUrl?: string;
}

interface InfobipViberFilePayload {
  from: string;
  to: string;
  content: {
    filename: string;
    mediaUrl: string;
  };
  notifyUrl?: string;
}
interface ViberVideoContent {
  caption?: string;
  mediaUrl: string;
  thumbnailUrl: string;
  mediaDuration: number;
  buttonTitle?: string;
}

interface InfobipViberVideoPayload {
  from: string;
  to: string;
  content: ViberVideoContent;
  notifyUrl?: string;
}

interface ViberImageContent {
  caption?: string;
  mediaUrl: string;
}

interface InfobipViberImagePayload {
  from: string;
  to: string;
  content: ViberImageContent;
  notifyUrl?: string;
}

interface InfobipViberButtonContent {
  text: string;
  title?: string;
  action?: string;
  mediaUrl?: string;
}

interface InfobipViberButtonPayload {
  from: string;
  to: string;
  content: InfobipViberButtonContent;
  notifyUrl?: string;
}

export type InfobipViberPayload =
  | InfobipViberTextPayload
  | InfobipViberFilePayload
  | InfobipViberVideoPayload
  | InfobipViberImagePayload
  | InfobipViberButtonPayload;
