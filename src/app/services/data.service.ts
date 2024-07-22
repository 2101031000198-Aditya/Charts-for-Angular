import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeasurementModule } from '../measurement/measurement.module'; // Define your Measurement model

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:44393/api/values';

  constructor(private http: HttpClient) { }

  getData(): Observable<MeasurementModule[]> {
    return this.http.get<MeasurementModule[]>(this.apiUrl);
  }
}
