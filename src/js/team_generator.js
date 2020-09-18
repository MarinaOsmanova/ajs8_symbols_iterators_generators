export default class TeamWithGenerator {
  constructor() {
    this.characters = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'Лучник2',
        type: 'Bowman',
        health: 60,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'Мечник',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Мечник2',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.characters.length; i += 1) {
      yield this.characters[i];
    }
  }
}
