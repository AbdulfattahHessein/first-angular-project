import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

export const navigationGuard: CanActivateFn = (route, state) => {
  let navigationService = inject(NavigationService);

  navigationService.isHomePage.next(state.url === '/Home');

  return true;
};
