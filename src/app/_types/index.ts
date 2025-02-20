export interface Player {
  id: number;
  name: string;
  elo: number;
}

export interface Cube {
  name: string;
  url: string;
}

export interface Game {
  roundNumber: number;
  player1Id: number;
  player2Id: number;
  player2?: Enrollment;
  player1?: Enrollment;
}

export interface Enrollment {
  playerId: number;
  player?: Player;
  draftId: number;
  draft?: Draft;
}

export interface Draft {
  cubeId: number;
  cube?: Cube;
}
