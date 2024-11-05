import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  successMessage: string = '';

  constructor() {}

  onSignIn(name: string, email: string, password: string) {
    const token = 'ThisIsAToken';

    localStorage.setItem('authToken', token);

    localStorage.setItem('userName', name);

    this.successMessage = 'La cuenta se ha creado satisfactoriamente';
  }
}
