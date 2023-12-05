import { data, example } from "./data.js";

let res = 0;

data.forEach((row) => {
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
    res += Math.pow(2, count.length - 1);
  }
});

console.log(res);
