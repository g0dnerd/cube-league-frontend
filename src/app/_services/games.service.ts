import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DraftGames, Game } from '../_types';
import { prod } from '../_environments';

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly apiUrl = `${prod.apiUrl}/games`;

  constructor(private readonly http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  getGamesByEnrollment(enrollmentId: number): Observable<DraftGames> {
    return this.http.get<DraftGames>(
      `${this.apiUrl}/enrollment/${enrollmentId}`,
    );
  }
}
