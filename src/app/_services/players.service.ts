import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from '../_types';
import { prod } from '../_environments';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private readonly apiUrl = `${prod.apiUrl}/players`;

  constructor(private readonly http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }
}
