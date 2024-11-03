import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(email: string, password: string): Observable<boolean> {
    // Simula la autenticación en el backend
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('token', 'fake-jwt-token');
      this.isAuthenticated = true;
      return of(true);
    }
    return of(false);
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('token');
  }
}
