const http = require("http");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./app");
const server = http.createServer(app);


const port = 3000;

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
