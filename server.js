const express = require("express");
const port = process.env.PORT || 8080;
const app = express();

console.clear();

app.use(express.json());
app.use(express.urlencoded({extended: true, }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const { checkAcc, addAcc , getEmp, addEmp } = require("./routes/index");

app.use(express.static(`${__dirname}/build`));
app.get("/", (_req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.post('/api/acc/check', checkAcc);
app.post('/api/acc/add', addAcc);
app.post('/api/emp/get', getEmp);
app.post('/api/emp/add', addEmp);

app.listen(port);
console.log("Server started at", port);

