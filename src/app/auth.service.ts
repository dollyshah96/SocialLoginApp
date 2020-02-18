import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public loginUser(user, type: string): Observable<any> {
    console.log('user in service::', user);

    if (type === 'gmail')
      return this.http.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${user.token}`);
    // Once you get these claims, you still need to check that the aud claim contains one of your app's client IDs. If it does, then the token is both valid and intended for your client, and you can safely retrieve and use the user's unique Google ID from the sub claim.
  }
}
