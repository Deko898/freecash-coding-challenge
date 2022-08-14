import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IOffer, OfferBoxSizeEnum } from './offer.interface';

export class OfferDto implements IOffer {
  @IsString()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  requirements: string;

  @IsString()
  @IsNotEmpty()
  thumbnail: string;

  @IsEnum(OfferBoxSizeEnum)
  @IsNotEmpty()
  boxSize: OfferBoxSizeEnum;

  @IsNumber()
  @IsNotEmpty()
  isDesktop: number;

  @IsNumber()
  @IsNotEmpty()
  isAndroid: number;

  @IsNumber()
  @IsNotEmpty()
  isIos: number;

  @IsString()
  @IsNotEmpty()
  offerUrlTemplate: string;

  @IsString()
  @IsOptional()
  providerName?: string;

  @IsString()
  @IsOptional()
  externalOfferId?: string;
}
