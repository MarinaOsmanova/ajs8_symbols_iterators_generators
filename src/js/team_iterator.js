export default class TeamWithIterator {
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

  [Symbol.iterator]() {
    let currentIndex = 0;
    const maxIndex = this.characters.length;
    const characters = Object.values(this.characters);
    return {
      next() {
        if (currentIndex < maxIndex) {
          const result = {
            done: false,
            value: characters[currentIndex],
          };
          currentIndex += 1;
          return result;
        }
        return { done: true };
      },
    };
  }
}
