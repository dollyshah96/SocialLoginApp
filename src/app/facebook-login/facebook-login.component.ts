import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
declare var FB: any;

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss']
})
export class FacebookLoginComponent implements OnInit {
  constructor(private authService: AuthService) {
    FB.fbAsyncInit = () => {
      FB.init({
        appId: 'your-app-id',
        cookie: true,
        xfbml: true,
        version: 'v5.0'
      });
      FB.AppEvents.logPageView();
    };
  }

  ngOnInit() {
    ((d, s, id) => {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    this.statusChange();
  }

  private statusChange(): void {
    FB.Event.subscribe('auth.statusChange', (response) => {
      console.log("submit login to facebook", response);
      if (response.status === 'connected') {
        if (response.authResponse) {
          FB.api('/me', {
            fields: 'last_name, first_name, email , picture , middle_name, name, name_format, short_name',
          }, (userInfo) => {
            console.log('userInfo', userInfo);
            this.authService.loginUser(userInfo, 'facebook');
          });
        }
      }
      else {
        console.log('User login failed');
      }
    });
  }
}