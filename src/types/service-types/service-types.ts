import { TemplateData } from '../infobip-types/request-types';

export interface MessagingServiceConfiguration {
  apiKey: string;
  piIntegrator?: string;
  piPlatform?: string;
  baseUrl?: string;
  notifyUrl?: string;
}

export interface SMSChannel {
  sendSMS(from: string, to: string | string[], message: string): Promise<void>;
}

export interface ViberChannel {
  sendText(from: string, to: string, message: string): Promise<void>;

  sendImage(
    from: string,
    to: string,
    imageUrl: string,
    caption?: string
  ): Promise<void>;

  sendFile(
    from: string,
    to: string,
    fileName: string,
    mediaUrl: string
  ): Promise<void>;

  sendVideo(
    from: string,
    to: string,
    thumbnailUrl: string,
    mediaUrl: string,
    mediaDuration: number,
    message?: string
  ): Promise<void>;

  sendButtonMessage(
    from: string,
    to: string,
    message: string,
    buttonText: string,
    buttonAction: string,
    imageUrl?: string
  ): Promise<void>;
}

export interface WhatsAppChannel {
  sendText(from: string, to: string, message: string): Promise<void>;

  sendImage(
    from: string,
    to: string,
    imageUrl: string,
    caption?: string
  ): Promise<void>;

  sendTemplateMessage(
    from: string,
    to: string,
    templateName: string,
    templateLanguage: string,
    templateData?: TemplateData
  ): Promise<void>;

  sendAudio(from: string, to: string, mediaUrl: string): Promise<void>;

  sendVideo(from: string, to: string, mediaUrl: string): Promise<void>;

  getTemplates(sender: string): Promise<void>;
}

export interface NumbersApi {
  getPurchasedNumbers(): Promise<void>;
}

export interface Destination {
  to: string;
}
