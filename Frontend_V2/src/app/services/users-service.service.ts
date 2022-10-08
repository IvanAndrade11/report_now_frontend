import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user-model";

@Injectable({
  providedIn: "root",
})
export class UsersServiceService {
<<<<<<< HEAD
  userURL = 'https://reportnow-production.up.railway.app/api/users/'
=======
  userURL = "https://reportnow-production.up.railway.app/api/users/";
<<<<<<< HEAD
  utilsURL = "https://reportnow-production.up.railway.app/api/utils/";
=======
>>>>>>> 14d1bed8073e536e929691f81ea5c1cba49917e9
>>>>>>> 8a310e81fcbf165af36de8f09afb937d9439b1c7
  //userURL = 'http://localhost:3000/api/users/'

  constructor(private httpClient: HttpClient) {}

  public validateUser(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.userURL}validate`, {
      email,
      password,
    });
  }
  public createUser(user: User): Observable<any> {
    return this.httpClient.post<any>(this.userURL + "create", user);
  }
  public getUsers(): Observable<any> {
    return this.httpClient.get<any>(this.userURL);
  }
  public getUser(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.userURL}${id}`);
  }
  public updateUser(user: User): Observable<any> {
    return this.httpClient.put<any>(`${this.userURL}${user.id}`, user);
  }
  public deleteUser(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(`${this.userURL}${id}`);
  }
  public sendMail(email: string | undefined): Observable<any> {
    return this.httpClient.post<any>(`${this.utilsURL}sendMail`, email);
  }
}
