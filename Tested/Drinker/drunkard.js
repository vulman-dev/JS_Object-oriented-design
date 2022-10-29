// BEGIN (write your solution here)
const Drunkard = class {
    run(cards1, cards2) {
        const firstPlayer = [...cards1];
        const secondPlayer = [...cards2];

        const getRoundWiner = (playerOne, playerTwo, round = 0) => {
            if (playerOne.length === 0 && playerTwo.length === 0) {
                return 'Botva!';
            }
            if (playerOne.length === 0) {
                return `Second player. Round: ${round}`;
            }
            if (playerTwo.length === 0) {
                return `First player. Round: ${round}`;
            }
            if (round === 100) {
                return 'Botva!';
            }

            const playerOneCard = playerOne.pop();
            const playerTwoCard = playerTwo.pop();

            if (playerOneCard > playerTwoCard) {
                playerOne.unshift(playerOneCard, playerTwoCard);
            }
            if (playerTwoCard > playerOneCard) {
                playerTwo.unshift(playerTwoCard, playerOneCard);
            }
            return getRoundWiner(playerOne, playerTwo, round += 1);
        };

        return getRoundWiner(firstPlayer, secondPlayer);
    }
}
// END

// TEACHER SOLUTION
export default class Drunkard1 {
    run(cards1, cards2) {
        const deck1 = cards1;
        const deck2 = cards2;

        for (let round = 0; round < 100; round += 1) {
            const deck1IsEmpty = deck1.length === 0;
            const deck2IsEmpty = deck2.length === 0;

            if (deck1IsEmpty && deck2IsEmpty) {
                return 'Botva!';
            } if (deck1IsEmpty) {
                return `Second player. Round: ${round}`;
            } if (deck2IsEmpty) {
                return `First player. Round: ${round}`;
            }

            const card1 = deck1.shift();
            const card2 = deck2.shift();

            if (card1 > card2) {
                deck1.push(card1, card2);
            } else if (card2 > card1) {
                deck2.push(card2, card1);
            }
        }

        return 'Botva!';
    }
}
//