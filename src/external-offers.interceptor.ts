import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OfferDto } from './offer.dto';
import { IOffer } from './offer.interface';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ExternalOffersInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<IOffer[]> {
    return next.handle().pipe(
      map((offers: IOffer[]) =>
        offers.map(offer => plainToClass(OfferDto, offer)),
      ),
      catchError(error => throwError(() => new Error(error))),
    );
  }
}
