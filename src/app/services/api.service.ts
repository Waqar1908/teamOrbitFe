import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../constants/api.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = API_CONFIG.BASE_URL;

  constructor(private http: HttpClient) {}

 getHeaders(): HttpHeaders {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  const token = localStorage.getItem('token')

  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`)
  }

  return headers
}

  // 🔹 GET
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + endpoint, {
      headers: this.getHeaders()
    });
  }

  // 🔹 POST
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + endpoint, body, {
      headers: this.getHeaders()
    });
  }

  // 🔹 PUT
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(this.baseUrl + endpoint, body, {
      headers: this.getHeaders()
    });
  }

  // 🔹 DELETE
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(this.baseUrl + endpoint, {
      headers: this.getHeaders()
    });
  }
}