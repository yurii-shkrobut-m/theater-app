import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  if (user?.token) {
    const cloned = req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${user?.token}`
      )
    });

    return next(cloned);
  }

  return next(req);
};
