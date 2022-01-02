function Player(hp, ap) {
  Person.call(this);
  Needs.call(this);
  Stats.call(this);

  this.hp = hp || 100;
  this.ap = ap || 100;
}

Player.prototype.eat = function() {
  const newValue = this.hunger.value + 10;

  if (newValue <= this.hunger.cap) {
    this.hunger.value = newValue;
  } else {
    this.hunger.value = this.hunger.cap;
  }

  console.log(this.hunger);
}

Player.prototype.getHungry = function() {
  const newValue = this.hunger.value - 2;

  if (newValue < 0) {
    this.hunger.value = 0;
  } else {
    this.hunger.value = newValue;
  }
}