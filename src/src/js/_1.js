const xss = require("xss");
const str = args.slice(1);
const html = xss(str, 
  {
    whiteList: {
      div: ["id", "class", "target"],
    },
  },
);
console.log(html);
