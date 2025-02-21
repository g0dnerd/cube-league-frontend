import { NgFor } from '@angular/common';
import { Component, Input, numberAttribute, OnInit } from '@angular/core';

import { Draft, Game } from '../_types';
import { GameService } from '../_services';

@Component({
  selector: 'app-draft-player-card',
  imports: [NgFor],
  templateUrl: './draft-player-card.component.html',
  styleUrl: './draft-player-card.component.css',
})
export class DraftPlayerCardComponent implements OnInit {
  @Input({ required: true, transform: numberAttribute }) enrollmentId = 0;

  constructor(private readonly gameService: GameService) {}

  games: Game[] = [];
  draft: Draft | null = null;

  ngOnInit() {
    this.gameService
      .getGamesByEnrollment(this.enrollmentId)
      .subscribe((data) => {
        this.games = data.games;
        this.draft = data.draft;
      });
  }
}
