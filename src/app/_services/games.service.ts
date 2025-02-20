import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from '../_types';
import { prod } from '../_environments';

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly apiUrl = `${prod.apiUrl}/games`;

  constructor(private readonly http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  getGamesByPlayerId(playerId: number): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/player/${playerId}`);
  }
}
