import { NgFor } from '@angular/common';
import { Component, Input, numberAttribute, OnInit } from '@angular/core';

import { GameService, PlayerService } from '../_services';
import { Game, Player } from '../_types';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [NgFor],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css',
})
export class PlayerDetailComponent implements OnInit {
  @Input({ required: true, transform: numberAttribute }) id = 0;

  player: Player | null = null;
  gameHistory: Game[] = [];

  constructor(
    private readonly playerService: PlayerService,
    private readonly gameService: GameService,
  ) {}

  ngOnInit() {
    this.playerService.getPlayerById(this.id).subscribe((data) => {
      this.player = data;
    });
    this.gameService.getGamesByPlayerId(this.id).subscribe((data) => {
      this.gameHistory = data;
    });
  }
}
