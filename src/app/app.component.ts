import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Cube, Game, Player } from './_types';
import { CubeService, GameService, PlayerService } from './_services';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  players: Player[] = [];
  games: Game[] = [];
  cubes: Cube[] = [];

  constructor(
    private readonly playerService: PlayerService,
    private readonly gameService: GameService,
    private readonly cubeService: CubeService,
  ) {}

  ngOnInit() {
    this.playerService.getPlayers().subscribe((data) => {
      this.players = data;
    });
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
    });
    this.cubeService.getCubes().subscribe((data) => {
      this.cubes = data;
    });
  }
}
