const _ = require("lodash");
const fs = require("fs");
const { loopThroughRecList, getListData } = require("./services");
const {
  MY_LIST,
  NAUGHTY_LIST,
  MIN_RATING,
  MIN_SIMILAR,
  MIN_JACCARD,
  MIN_OVERLAP,
  TO_COMPARE,
} = require("./config");
const {
  jaccard,
  overlap,
  sorensenDice,
  minSimilar,
  getSimilarData,
  freqCount,
  renameFile,
  orderBy,
} = require("./utils");

// loopThroughRecList(MY_LIST, TO_COMPARE, 1, 400, 6).then((response) => {
//   console.log(response, "works");
// });
// renameFile();

// let data = getSimilarData(jaccard, 0.08);

// let counted = freqCount(data);
// let parsed = JSON.stringify(counted);
// fs.writeFileSync("./output/jaccard.json", parsed);
