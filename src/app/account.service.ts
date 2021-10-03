import { Injectable } from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<User>(`/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  register(user: any) {
    let formData: FormData = new FormData()
    formData.append('username', user.username)
    formData.append('password1', user.password1)
    formData.append('password2', user.password2)
    return this.http.post(`/signup/`, formData);
  }
}
