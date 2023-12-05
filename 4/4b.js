import { data, example } from "./data.js";

const scratchCards = {
  1: 1,
};

const matches = {};

data.forEach((row, index) => {
  const [winners, items] = row.split(" | ");
  const count = ` ${items} `.match(
    new RegExp(
      `(?=( ${winners
        .split(" ")
        .filter((str) => str != "")
        .join(" | ")} ))`,
      "g"
    )
  );

  if (count != null && count.length > 0) {
    matches[index + 1] = count.length;
    for (let i = index + 2; i < index + 2 + count.length; i++) {
      if (scratchCards[i]) {
        scratchCards[i] += scratchCards[index + 1];
      } else {
        scratchCards[i] = 1 + scratchCards[index + 1];
      }
    }
  } else {
    matches[index + 1] = 0;
  }

  if (!scratchCards[index + 1]) {
    scratchCards[index + 1] = 1;
  }
});

// console.log(Object.values(scratchCards).reduce((sum, i) => sum + i, 0));
console.log(scratchCards);
