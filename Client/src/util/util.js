const getSingleData = async () => new Promise((resolve) => {
  setTimeout(() => (resolve({
    name: "phil",
    grade: "A",
    industry: "fuck this",
    score: "4545",
    numEmployees: "5943",
    ticker: "tit",
  })),
  1000);
});

module.exports = { getSingleData };
