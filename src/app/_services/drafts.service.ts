import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Draft } from '../_types';
import { prod } from '../_environments';

@Injectable({ providedIn: 'root' })
export class DraftService {
  private readonly apiUrl = `${prod.apiUrl}/drafts`;

  constructor(private readonly http: HttpClient) {}

  getDrafts(): Observable<Draft[]> {
    return this.http.get<Draft[]>(this.apiUrl);
  }
}
