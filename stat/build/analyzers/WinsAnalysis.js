"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var homeTeamWon = match.indexOf(MatchResult_1.MatchResult.HomeWin) === 5;
            var awayTeamWon = match.indexOf(MatchResult_1.MatchResult.AwayWin) === 5;
            var homeTeam = match.indexOf(this.team) === 1;
            var awayTeam = match.indexOf(this.team) === 2;
            homeTeam && homeTeamWon ? wins++ : null;
            awayTeam && awayTeamWon ? wins++ : null;
        }
        return "Team " + this.team + " won " + wins + " games.";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
