import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

export const DataExtractorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map((event: any) => {
      if (event instanceof HttpResponse && isApiResponse(event.body)) {
        
        const error: any = {...event.body}
          
        if(error.isError && error.data == null) {
          Swal.fire(error.message);
        }

        if (!event.body.isSuccessful) {
          throw JSON.stringify(event.body.errors);
        }

        return event.clone({ body: event.body.data ?? null });
      }

      return event;
    }),
    catchError(err => {
      return throwError(() => err);
    })
  );
};

function isApiResponse(body: any): body is { isSuccessful: boolean; data: any; errors?: any } {
  return !!body && typeof body === 'object' && 'isSuccessful' in body && 'data' in body;
}
