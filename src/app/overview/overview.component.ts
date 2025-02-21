import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Player } from '../_types';
import { PlayerService } from '../_services';

@Component({
  selector: 'app-overview',
  imports: [NgFor, RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  leagueEnd: number = Date.parse('2025-09-27T10:00:00Z');

  players: Player[] = [];

  remainingTime: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  timer: any | null = null;

  constructor(private readonly playerService: PlayerService) {}

  ngOnInit() {
    this.updateRemainingTime();
    this.timer = setInterval(() => {
      this.updateRemainingTime();
    }, 1000);

    this.playerService.getPlayers().subscribe((data) => {
      this.players = data;
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
