import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cube } from '../_types';
import { prod } from '../_environments';

@Injectable({ providedIn: 'root' })
export class CubeService {
  private readonly apiUrl = `${prod.apiUrl}/cubes`;

  constructor(private readonly http: HttpClient) {}

  getCubes(): Observable<Cube[]> {
    return this.http.get<Cube[]>(this.apiUrl);
  }
}
