import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  if (authService.isAuthenticated) {
    return true;
  } else {
    alert('Please login first');
    authService.redirectUrl = state.url;
    router.navigate(['/Login']);
    return false;
  }
};
