// look back again 😐😐😐

// const deck = [1, 2, 3, 4, 10];

function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}
// console.log(seeingDouble(deck));

///---///

// const deck = [1, 3, 9, 3, 7];

function threeOfEachThree(deck) {
  return deck.reduce((newArray, card) => {
    card === 3 ? newArray.push(card, card, card) : newArray.push(card);
    return newArray;
  }, []);
}

// console.log(threeOfEachThree(deck));

///---///

// const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function middleTwo(deck) {
  const mid = deck.length / 2 - 1;
  return deck.slice(mid, mid + 2);
}

// console.log(middleTwo(deck));

///---///

// const deck = [1, 2, 3, 5, 6, 10];

function sandwichTrick(deck) {
  const mid = deck.length / 2;
  deck.splice(mid, 0, deck.pop());
  deck.splice(mid, 0, deck.shift());
  return deck;
}

// console.log(sandwichTrick(deck));

///---///

// const deck = [1, 2, 3, 4, 10, 2];

function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

// console.log(twoIsSpecial(deck));

///---///
// const deck = [10, 1, 5, 3, 2, 8, 7];

function perfectlyOrdered(deck) {
  deck.sort((a, b) => a - b);
  return deck;
}

// console.log(perfectlyOrdered(deck));

///---///

// const deck = [10, 1, 5, 3, 2];

function reorder(deck) {
  deck.reverse();
  return deck;
}

// console.log(reorder(deck));
