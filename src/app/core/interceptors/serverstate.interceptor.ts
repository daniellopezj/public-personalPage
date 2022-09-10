import { Injectable, NgZone } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { get, put } from 'memory-cache';
import { Observable, of,  } from 'rxjs';


@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {

  constructor(private transferState: TransferState, private ngZone: NgZone) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    const cachedData = get(req.url);
    if (cachedData) {
      this.transferState.set(makeStateKey(req.url), cachedData);
      return of(new HttpResponse({ body: cachedData, status: 200 }));
    }

    return next.handle(req).pipe(
      // tap(
      //   event => {
      //   if (event instanceof HttpResponse) {
      //     this.transferState.set(makeStateKey(req.url), event.body);
      //     this.ngZone.runOutsideAngular(() => {
      //       put(req.url, event.body, 1000 * 60);
      //     });
      //   }
      // }
      // )
    );

  }

}
