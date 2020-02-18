import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
declare var gapi: any;

@Component({
  selector: 'app-gmail-login',
  templateUrl: './gmail-login.component.html',
  styleUrls: ['./gmail-login.component.scss']
})

export class GmailLoginComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.btnRender();
  }

  public btnRender() {
    const options = {
      scope: 'profile email', //https://www.googleapis.com/auth/drive
      width: 250,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: (googleUser => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        const obj = {
          token: googleUser.getAuthResponse().id_token,
          id: profile.getId(),
          name: profile.getName(),
          image: profile.getImageUrl(),
          email: profile.getEmail()
        }

        this.authService.loginUser(obj, 'gmail').subscribe(res => {
          console.log('res::', res);
        });;

      }),
      onfailure: (() => {
        console.log('failure');
      })
    };
    gapi.signin2.render('googleBtn', options);
  }
}
