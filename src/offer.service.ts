import { Injectable } from '@nestjs/common';
import { map, Observable, of } from 'rxjs';
import { Offer } from './offer.entity';
import { IOffer, IPayloadProvider, IPayloadProvider2 } from './offer.interface';
import { payload } from './offer1.payload';
import { payload2 } from './offer2.payload';

@Injectable()
export class OfferService {
  getExternalOffersFromProviderOne(): Observable<IOffer[]> {
    return of(payload).pipe(map(this.mapToEntityFromProviderOne));
  }

  getExternalOffersFromProviderTwo(): Observable<IOffer[]> {
    return of(payload2).pipe(map(this.mapToEntityFromProviderTwo));
  }

  private mapToEntityFromProviderOne(value: IPayloadProvider): IOffer[] {
    return value.response.offers.map(
      ({
        offer_id,
        offer_name,
        offer_desc,
        call_to_action,
        offer_url,
        image_url,
        platform,
        device,
      }) =>
        new Offer({
          externalOfferId: offer_id,
          name: offer_name,
          description: offer_desc,
          requirements: call_to_action,
          offerUrlTemplate: offer_url,
          thumbnail: image_url,
          providerName: 'offer1',
          isIos: platform === 'mobile' && device.includes('iphone') ? 1 : 0,
          isAndroid:
            platform === 'mobile' && !device.includes('iphone') ? 1 : 0,
          isDesktop: platform === 'desktop' ? 1 : 0,
        }),
    );
  }

  private mapToEntityFromProviderTwo(value: IPayloadProvider2): IOffer[] {
    return Object.keys(value.data).map(key => {
      const {
        campaign_id,
        name,
        tracking_url,
        description,
        instructions,
      } = value.data[key].Offer;

      const { android, ios, web } = value.data[key].OS;

      return new Offer({
        externalOfferId: String(campaign_id),
        name,
        offerUrlTemplate: tracking_url,
        requirements: instructions,
        description,
        isAndroid: Number(android),
        isIos: Number(ios),
        isDesktop: Number(web),
        providerName: 'offer2',
      });
    });
  }
}
