"# player" 

In the assetsList.js you can add assets for Player to buy.

Example:
{
  id: 4,
  type: 'thirst',
  name: 'Water',
  price: 5,
  modifiers: {
    drink: 80,
    getFullBladder: -10,
  }
}

The id must be sequential, so be aware of the last id inserted and add 1 to the neu asset.
Type must point to the focus need or attribute the item should apply effects.

The modifiers object should have the attributes of which the item would apply effects.

You should add the following:

eat = add "hunger"
getHungry = remove "hunger"

drink = add "thirst"
getThirst = remove "thirst"

piss = add "bladder"
getFullBladder = remove "bladder"

getRested = add "rest"
live = remove "rest"