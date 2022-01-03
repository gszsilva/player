function Inventory(limit) {
  this.limit = limit = 10;
  this.assets = Array(10).fill(null);
  this.money = 50;
}

Inventory.prototype.add = function(asset, quantity = 1) {
  const usedIndexes = [];
  
  for (i = quantity; i > 0; i--) {
    const nextIndex = this.assets.findIndex((a, index) => !a && usedIndexes.indexOf(index) === -1);
    usedIndexes.push(nextIndex);
    this.assets.splice(nextIndex, 1, asset);
  }
}

Inventory.prototype.remove = function(id, quantity = 1) {
  if (quantity > 1) {
    for (i = quantity; i < 0; i --) {
      const index = this.assets.findIndex(a => a.id === id);
      this.assets.splice(index, 1, null);
    }
  } else {
    const index = this.assets.findIndex(a => a && a.id === id);
    this.assets.splice(index, 1, null);
  }
}
