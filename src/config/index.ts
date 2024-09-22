export default {
  dbConfig: import("./db").then((module) => module.default),
};
