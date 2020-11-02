import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private URL_BASE = 'http://localhost:3001'
  constructor(private http: HttpClient) { }

  public login(body) {
    return this.http.post(`${this.URL_BASE}/login`, body);
  }

  public registry(body) {
    return this.http.post(`${this.URL_BASE}/registry`, body)
  }
}
