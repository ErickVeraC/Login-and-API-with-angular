import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: string = '';

  constructor() {}

  onLogin(email: string, password: string) {
    const storedEmail = 'alexsmith@gmail.com';
    const storedPassword = 'password123';

    if (email === storedEmail && password === storedPassword) {
      const token = 'ThisIsAToken';

      localStorage.setItem('authToken', token);

      this.errorMessage = '';
      alert('Inicio de sesión exitoso');
    } else {
      this.errorMessage =
        'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
    }
  }
}
