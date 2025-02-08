import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../../shared/services/session.service';
import { ToastrService } from 'ngx-toastr';

export const notAuthGuard: CanActivateFn = (route, state) => {
  const sessionService = inject(SessionService);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  if (sessionService.isLoggedIn()) {
    toastr.warning("You are already logged in!");
    router.navigate([""]).then();
    return false;
  }

  return true;
};
