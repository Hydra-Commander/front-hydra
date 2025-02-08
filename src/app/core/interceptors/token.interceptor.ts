import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from '../../shared/services/session.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const sessionService: SessionService = inject(SessionService);
  const session = sessionService['session'].value;

  if (session?.token && !req.headers.has('Authorization')) {
    const clonedRequest = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${session.token}`)
    });
    return next(clonedRequest);
  }

  return next(req);
};
