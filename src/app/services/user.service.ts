import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface/User.dto';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendUrl: string;
  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  findOne(id: any): Observable<User> {
    return this.http.get<any>(`${this.backendUrl}/api/users/${id}`);
  }

  create(user: any): any {
    return this.http.post<any>(`${this.backendUrl}/api/users`, user);
  }
}
