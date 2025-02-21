import { NgFor } from '@angular/common';
import { Component, Input, numberAttribute, OnInit } from '@angular/core';

import { Draft, Game } from '../_types';
import { DraftService, GameService } from '../_services';

@Component({
  selector: 'app-draft-player-card',
  imports: [NgFor],
  templateUrl: './draft-player-card.component.html',
  styleUrl: './draft-player-card.component.css',
})
export class DraftPlayerCardComponent implements OnInit {
  @Input({ required: true, transform: numberAttribute }) enrollmentId = 0;

  draft: Draft | null = null;
  games: Game[] = [];

  constructor(
    private readonly draftService: DraftService,
    private readonly gameService: GameService,
  ) {}

  ngOnInit() {
    this.draftService
      .getDraftByEnrollment(this.enrollmentId)
      .subscribe((data) => {
        this.draft = data;
      });
    this.gameService
      .getGamesByEnrollment(this.enrollmentId)
      .subscribe((data) => {
        this.games = data;
      });
  }
}
