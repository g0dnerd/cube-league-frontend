import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Enrollment } from '../_types';
import { prod } from '../_environments';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly apiUrl = `${prod.apiUrl}/enrollments`;

  constructor(private readonly http: HttpClient) {}

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.apiUrl);
  }

  getEnrollmentsByPlayerId(playerId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/player/${playerId}`);
  }
}
