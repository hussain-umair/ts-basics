abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`attack with ${this.specialAttack()}`)
  }

  abstract specialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  specialAttack(): string {
    return "Hadoken"
  }
  get name(): string {
    return 'Ryu'
  }
}
class ChunLi extends StreetFighter {
  specialAttack(): string {
    return "Lightning Kick"
  }
  get name(): string {
    return 'Chun-Li'
  }
}