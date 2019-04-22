import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayerService } from '../player.service';
import { isNull } from 'util';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers()
        .subscribe(players => this.players = players);
  }

  add(name: string, team: string, goals: number, assistances: number): void {
    name = name.trim();
    team = team.trim();
    if (!name || !team || !goals || !assistances) { return; }
    this.playerService.addPlayer({name, team, goals, assistances} as Player)
      .subscribe(player => {
        this.players.push(player);
      });
  }

  delete(player: Player): void {
    this.players = this.players.filter(h => h !== player);
    this.playerService.deletePlayer(player).subscribe();
  }
}
