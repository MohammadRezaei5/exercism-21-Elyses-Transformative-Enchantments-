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
