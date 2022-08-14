import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { OfferService } from './offer.service';
import { Observable } from 'rxjs';
import { ExternalOffersInterceptor } from './external-offers.interceptor';
import { IOffer } from './offer.interface';

@UseInterceptors(ExternalOffersInterceptor)
@Controller()
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Get('/provider-1')
  getExternalOffersFromProviderOne(): Observable<IOffer[]> {
    return this.offerService.getExternalOffersFromProviderOne();
  }

  @Get('/provider-2')
  getExternalOffersFromProviderTwo(): Observable<IOffer[]> {
    return this.offerService.getExternalOffersFromProviderTwo();
  }
}
