import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 1, name: 'Leo Messi', team: 'FC Barcelona', goals: 33, assistances: 13 },
      { id: 2, name: 'Karim Benzema', team: 'Real Madrid', goals: 21, assistances: 5 },
      { id: 3, name: 'Luis Suarez', team: 'FC Barcelona', goals: 20, assistances: 6 },
      { id: 4, name: 'Cristhian Stuani', team: 'Girona FC', goals: 18, assistances: 0 },
      { id: 5, name: 'Iago Aspas', team: 'Celta de Vigo', goals: 16, assistances: 5 },
      { id: 6, name: 'Wissam Ben Yedder', team: 'Sevilla FC', goals: 16, assistances: 8 },
      { id: 7, name: 'Raúl de Tomás', team: 'Rayo Vallecano', goals: 14, assistances: 1 },
      { id: 8, name: 'Jaime Mata', team: 'Getafe', goals: 14, assistances: 6 },
      { id: 9, name: 'Antoine Griezmann', team: 'Atlético de Madrid', goals: 14, assistances: 9 },
      { id: 10, name: 'Charles Dias', team: 'Eibar', goals: 13, assistances: 1 }
    ];
    return {players};
  }

  // Overrides the genId method to ensure that a player always has an id.
  // If the players array is empty,
  // the method below returns the initial number (11).
  // if the players array is not empty, the method below returns the highest
  // player id + 1.
  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 11;
  }
}