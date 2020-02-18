import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GmailLoginComponent } from './gmail-login/gmail-login.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
@NgModule({
  declarations: [
    AppComponent,
    GmailLoginComponent,
    FacebookLoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
