import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      let homeTeamWon: boolean = match.indexOf(MatchResult.HomeWin) === 5;
      let awayTeamWon: boolean = match.indexOf(MatchResult.AwayWin) === 5;
      let homeTeam: boolean = match.indexOf(this.team) === 1;
      let awayTeam: boolean = match.indexOf(this.team) === 2;
      homeTeam && homeTeamWon ? wins++ : null;
      awayTeam && awayTeamWon ? wins++ : null;
    }

    return `Team ${this.team} won ${wins} games.`;
  }
}
