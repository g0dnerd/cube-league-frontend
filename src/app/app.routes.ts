import { Routes } from '@angular/router';

import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  {
    path: 'players/:id',
    component: PlayerDetailComponent,
  },
];
