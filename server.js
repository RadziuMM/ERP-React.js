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

const { checkAcc, addAcc , getEmp, addEmp, editEmp ,deleteEmp,addEvent,getEvent,editEvent,deleteEvent} = require("./routes/index");

app.use(express.static(`${__dirname}/build`));
app.get("/", (_req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.post('/api/acc/check', checkAcc);
app.post('/api/acc/add', addAcc);

app.post('/api/emp/get', getEmp);
app.post('/api/emp/add', addEmp);
app.post('/api/emp/edit', editEmp);
app.post('/api/emp/delete', deleteEmp);

app.post('/api/events/add', addEvent);
app.post('/api/events/get', getEvent);
app.post('/api/events/edit', editEvent);
app.post('/api/events/delete', deleteEvent);

app.listen(port);
console.log("Server started at", port);

