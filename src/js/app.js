import TeamWithIterator from './team_iterator';
import TeamWithGenerator from './team_generator';

const team1 = new TeamWithIterator();
for (const character of team1) {
  console.log(character);
}

console.log('--------------------------------');

const team2 = new TeamWithGenerator();
for (const character of team2) {
  console.log(character);
}
