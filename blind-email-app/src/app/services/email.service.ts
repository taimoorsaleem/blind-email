import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Buffer } from 'buffer';

@Injectable()
export class EmailService {
  apiUrl(endpoint: string) {
    return `http://127.0.0.1:3000/api/v1/${endpoint}`
  }

  constructor(private http: Http) { }

  fetchEmail() {
    return this.http.post(this.apiUrl('email/get'), {}, {
      withCredentials: true
    }).map(response => response.json());
  }

  decodeEmail(encodedEmail: string) {
    return (new Buffer(encodedEmail, 'base64')).toString();
  }
}