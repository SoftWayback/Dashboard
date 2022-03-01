import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  createNewUser(payload) {
    return this.http.post(`${environment.baseURL}user/register`, payload);
  }
  userLogin(payload) {
    return this.http.post(`${environment.baseURL}user/login`, payload);
  }
  getProtectedData() {
    console.log("bonjour");
  }
  getYoutubeAuth() {
    console.log("bonjour");
    return this.http.post(`${environment.baseURL}auth/twitter`, '');
  }
  constructor(private http: HttpClient) {}
}