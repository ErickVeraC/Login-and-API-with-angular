import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profile = {
    name: 'Erick Vera Coder',
    age: 34,
    yearsAsFan: 5,
    image: 'assets/images/user1.png',
  };
}
