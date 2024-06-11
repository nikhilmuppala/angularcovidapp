import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiKey = environment.apiKey;
  private apiUrl = `https://api.covidactnow.org/v2/county/06075.json?apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getPatientDetails(name: string) {
    return this.http.get(this.apiUrl); // Modify the URL as necessary to include the patient name
  }
}
