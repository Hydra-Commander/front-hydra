import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../../shared/services/session.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const sessionService = inject(SessionService);
  const router = inject(Router);
  const toastr = inject(ToastrService);
  if (sessionService.isLoggedIn()) {
    return true;
  }

  toastr.warning("You must be logged in to access this page.");
  router.navigate(["/login"]).then();
  return false;
};
