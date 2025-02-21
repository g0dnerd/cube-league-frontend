import { AsyncPipe, NgFor } from '@angular/common';
import { Component, input, numberAttribute, OnInit } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';

import { EnrollmentService, PlayerService } from '../_services';
import { Enrollment, Player } from '../_types';
import { DraftPlayerCardComponent } from '../draft-player-card/draft-player-card.component';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [AsyncPipe, DraftPlayerCardComponent, NgFor],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css',
})
export class PlayerDetailComponent implements OnInit {
  id = input(0, { transform: numberAttribute });

  player$: Observable<Player | null> = of(null);
  enrollments$: Observable<Enrollment[]> = of([]);

  constructor(
    private readonly playerService: PlayerService,
    private readonly enrollmentService: EnrollmentService,
  ) {}

  ngOnInit() {
    this.player$ = this.playerService
      .getPlayerById(this.id())
      .pipe(shareReplay(1));
    this.enrollments$ = this.enrollmentService.getEnrollmentsByPlayerId(
      this.id(),
    );
  }
}
