const mysql = require("mysql");
const passwordHash = require("password-hash");

let storage = [];
let employes = [];

const db = mysql.createConnection({
  host: "uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "myshwru2hqv6yt0b",
  password: "eejj0e9iphaa7uu9",
  database: "xasbkxvn2am0jw82",
});

let fetchAcc = new Promise(function (resolve, reject) {
  db.query("SELECT * FROM accounts WHERE exist = 1", function (err, res) {
    if (err) {
      console.log(null, err);
      resolve();
    } else {
      storage = JSON.parse(JSON.stringify(res));
      resolve();
    }
  });
});

module.exports = {
  checkAcc: (req, res) => {
    fetchAcc.then(() => {
      for (let i = 0; i <= storage.length; i += 1) {
        try {
          if (
            storage[i].name === req.body.name &&
            passwordHash.verify(req.body.password, storage[i].password)
          ) {
            console.log(`${req.body.name} has logged`);
            res.send(["1",`${i}`]);
          }
          if (i === storage.length - 1) {
            try {
              res.send("0");
            } catch {}
          }
        } catch {
          try {
            res.send("0");
            console.log("db is empty");
          } catch {}
        }
      }
    });
  },
  addAcc: (req, resp) => {
    fetchAcc
      .then(() => {
        for (let i = 0; i < storage.length; i += 1) {
          if (storage[i].name === req.body.name) {
            return false;
          }
        }
      })
      .then((res) => {
        if (res !== false) {
          const hashedPassword = passwordHash.generate(req.body.password);
          db.query(
            "INSERT INTO accounts(name,password,exist) VALUES(?,?,1)",
            [req.body.name, hashedPassword],
            function (err, res) {
              if (err) {
                console.log(null, err);
              } else {
                resp.send("1");
                console.log(`${req.body.name} added to users!`);
                fetchAcc = new Promise(function (resolve, reject) {
                  db.query("SELECT * FROM accounts WHERE exist = 1", function (
                    err,
                    res
                  ) {
                    if (err) {
                      console.log(null, err);
                      resolve();
                    } else {
                      storage = JSON.parse(JSON.stringify(res));
                      resolve();
                    }
                  });
                });
                fetchAcc.then();
              }
            }
          );
        } else {
          resp.send("0");
        }
      });
  },
  getEmp: (req, resp) => {
    db.query(
      "SELECT * FROM employes where `exist` = 1 and acc_id = ?;",
      [req.body.acc_id],
      function (err, res) {
        if (err) {
          console.log(null, err);
        } else {
          employes = JSON.parse(JSON.stringify(res));
          console.log(`employes list feched by account id:${req.body.acc_id}`);
          resp.send(employes);
        }
      }
    );
  },
  addEmp: (req, resp) => {
    db.query(
      "INSERT INTO employes(acc_id,firstName,lastName,jobTitle,salaryPH,workedH,employedSince,exist) VALUES(?,?,?,?,?,?,?,1)",
      [
        req.body.acc_id,
        req.body.firstName,
        req.body.lastName,
        req.body.jobTitle,
        req.body.salaryPH,
        req.body.workedH,
        req.body.employedSince,
      ],
      function (err, res) {
        if (err) {
          console.log(null, err);
        } else {
          console.log(`User id:${req.body.acc_id} add new employer to db!`);
          resp.send("1");
        }
      }
    );
  },
  editEmp: (req, resp) => {
    db.query(
      "UPDATE employes SET firstName = ?,lastName = ?,jobTitle = ?,salaryPH = ?,workedH = ?,employedSince = ?,exist = 1 WHERE id = ?",
      [
        req.body.firstName,
        req.body.lastName,
        req.body.jobTitle,
        req.body.salaryPH,
        req.body.workedH,
        req.body.employedSince,
        req.body.id,
      ],
      function (err, res) {
        if (err) {
          console.log(null, err);
        } else {
          console.log(`Employee updated in account id:${req.body.acc_id}!`)
          resp.send("1");
        }
      }
    );
  },
  deleteEmp:(req,resp) =>{
    db.query(
      "UPDATE employes SET exist = 0 WHERE id = ?",
      [
        req.body.id,
      ],
      function (err, res) {
        if (err) {
          console.log(null, err);
        } else {
          console.log(`Employee removed in account id:${req.body.acc_id}!`)
          resp.send("1");
        }
      }
    );
  }
};
