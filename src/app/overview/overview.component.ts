import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Draft, Enrollment, Game, Player } from '../_types';
import {
  DraftService,
  EnrollmentService,
  GameService,
  PlayerService,
} from '../_services';

@Component({
  selector: 'app-overview',
  imports: [NgFor, RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  leagueEnd: number = Date.parse('2025-09-27T10:00:00Z');

  players: Player[] = [];
  drafts: Draft[] = [];
  enrollments: Enrollment[] = [];
  games: Game[] = [];

  remainingTime: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  timer: any | null = null;

  constructor(
    private readonly playerService: PlayerService,
    private readonly gameService: GameService,
    private readonly draftService: DraftService,
    private readonly enrollmentService: EnrollmentService,
  ) {}

  ngOnInit() {
    this.updateRemainingTime();
    this.timer = setInterval(() => {
      this.updateRemainingTime();
    }, 1000);

    this.playerService.getPlayers().subscribe((data) => {
      this.players = data;
    });
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
    });
    this.draftService.getDrafts().subscribe((data) => {
      this.drafts = data;
    });
    this.enrollmentService.getEnrollments().subscribe((data) => {
      this.enrollments = data;
    });
  }

  updateRemainingTime() {
    const now = Date.now();
    const timeDiff = this.leagueEnd - now;

    if (timeDiff > 0) {
      this.remainingTime.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.remainingTime.hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      this.remainingTime.minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      this.remainingTime.seconds = Math.floor((timeDiff / 1000) % 60);
    } else {
      this.remainingTime = { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Time is up
    }
  }
}
