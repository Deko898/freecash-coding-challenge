export interface IOffer {
  id: number;
  name: string;
  slug: string;
  description: string;
  requirements: string;
  thumbnail: string;
  boxSize: OfferBoxSizeEnum;
  isDesktop: number;
  isAndroid: number;
  isIos: number;
  offerUrlTemplate: string;
  providerName?: string;
  externalOfferId?: string;
}

export enum OfferBoxSizeEnum {
  large = 'large',
  small = 'small',
}

export interface IPayloadProvider {
  query: IPayloadProviderQuery;
  response: IPayloadProviderResponse;
}

export interface IPayloadProviderQuery {
  pubid: string;
  appid: number;
  country: string;
  platform: string;
}

export interface IPayloadProviderResponse {
  currency_name: string;
  offers_count: number;
  offers: IPayloadProviderOffer[];
}

export interface IPayloadProviderOffer {
  offer_id: string;
  offer_name: string;
  offer_desc: string;
  call_to_action: string;
  disclaimer: string;
  offer_url: string;
  offer_url_easy: string;
  payout: number;
  payout_type: string;
  amount: number;
  image_url: string;
  image_url_220x124: string;
  countries: string[];
  platform: string;
  device: string;
  category: {
    [id: string]: string;
  };
  last_modified: number;
  preview_url: string;
  package_id: string;
  verticals: IPayloadProviderOfferVertical[];
}

export interface IPayloadProviderOfferVertical {
  vertical_id: string;
  vertical_name: string;
}

export interface IPayloadProvider2 {
  status: string;
  data: { [id: string]: IPayloadProvider2Data };
}

export interface IPayloadProvider2Data {
  Offer: IPayloadProvider2Offer;
  Country: any;
  State: any;
  City: any;
  Connection_Type: any;
  Device: any;
  OS: IPayloadProvider2OS;
}

export interface IPayloadProvider2Offer {
  campaign_id: number;
  store_id: number;
  tracking_type: string;
  campaign_vertical: string;
  currency_name_singular: string;
  currency_name_plural: string;
  network_epc: string;
  icon: string;
  name: string;
  tracking_url: string;
  instructions: string;
  disclaimer: string;
  description: string;
  short_description: string;
  offer_sticker_text_1: string;
  offer_sticker_text_2: null;
  offer_sticker_text_3: null;
  offer_sticker_color_1: string;
  offer_sticker_color_2: string;
  offer_sticker_color_3: string;
  sort_order_setting: string;
  category_1: string;
  category_2: null;
  amount: number;
  payout_usd: number;
  start_datetime: string;
  end_datetime: string;
  is_multi_reward: boolean;
}

export interface IPayloadProvider2OS {
  android: boolean;
  ios: boolean;
  web: boolean;
  min_ios: boolean;
  max_ios: boolean;
  min_android: boolean;
  max_android: boolean;
}
