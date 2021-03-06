export interface IAdapterHTTPOptions {
  host: string;
  port: number;
}

export interface IAdapterOptions {
  logLevel: string;
  http: IAdapterHTTPOptions;
  serviceID: string;
  token: string;
  tokenSecret: string;
  username: string;
}

export interface IActivityStream {
  actor?: {};
  object?: ITwilioActivityStreamObject;
  target?: {};
  readonly "@context": string;
  readonly generator: {};
  readonly published: number;
  readonly type: string;
}

export interface ITwilioWebHookEvent {
  response: any;
  request: any;
}

export interface ITwilioActivityStreamObject {
  id: string;
  content?: string;
  mediaType?: string;
  type: string;
  url?: string;
  attachment?: ITwilioMedia;
}

export interface ITwilioMedia {
  mediaType: string;
  type: string;
  url: string;
}
