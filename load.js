let existingPlayer = {
  get: () => localStorage.getItem('player'),
  set: (player) => localStorage.setItem('player', player),
  remove: () => localStorage.removeItem('player')
}

