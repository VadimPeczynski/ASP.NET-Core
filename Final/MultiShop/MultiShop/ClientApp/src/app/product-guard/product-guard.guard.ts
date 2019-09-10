import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProductGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot): boolean {
      const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Niewłaściwa ścieżka');
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
