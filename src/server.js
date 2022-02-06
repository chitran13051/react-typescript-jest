const express = require("express");
const { renderToString } = require("react-dom/server");

const App = require("./App");
const app = express();

const port = 3000;
const page = renderToString(<App />);
app.get("/", (req, res, next) => {
  res.send(`<div id="root">${page}</div>`);
});

app.listen(port, () => console.log(`App is running on port ${port}`));
