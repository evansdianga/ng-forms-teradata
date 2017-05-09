import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  textElements = [
    {
      'name': 'firstname',
      'label': 'Name',
      'type': 'input',
      'required': true
    },
    {
      'name': 'lastname',
      'label': 'Last Name',
      'type': 'input',
      'required': true
    },
    {
      'name': 'textarea',
      'label': 'Comments',
      'type': 'textarea',
      'required': false
    },
    {
      'name': 'textemail',
      'type': 'text',
      'required': false,
      'label': 'Email'
    },
    {
      'name': 'required-password',
      'label': 'Password',
      'type': 'password',
      'required': true
    }
  ];
}
