import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  isHomePage: BehaviorSubject<boolean>;
  constructor(private router: Router) {
    this.isHomePage = new BehaviorSubject<boolean>(false);
  }
}
