import { NgFor } from '@angular/common';
import { Component, Input, numberAttribute, OnInit } from '@angular/core';

import { EnrollmentService, PlayerService } from '../_services';
import { Enrollment, Player } from '../_types';
import { DraftPlayerCardComponent } from '../draft-player-card/draft-player-card.component';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [DraftPlayerCardComponent, NgFor],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css',
})
export class PlayerDetailComponent implements OnInit {
  @Input({ required: true, transform: numberAttribute }) id = 0;

  player: Player | null = null;
  enrollments: Enrollment[] = [];

  constructor(
    private readonly enrollmentService: EnrollmentService,
    private readonly playerService: PlayerService,
  ) {}

  ngOnInit() {
    this.playerService.getPlayerById(this.id).subscribe((data) => {
      this.player = data;
    });
    this.enrollmentService
      .getEnrollmentsByPlayerId(this.id)
      .subscribe((data) => {
        this.enrollments = data;
      });
  }
}
