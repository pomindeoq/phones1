import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  constructor(private http: HttpClient) {}

  getPhoneBrands() {
    return this.http.get(
      'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/brands.json'
    );
  }

  getPhones() {
    return this.http.get(
      'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/phones.json'
    );
  }
}
