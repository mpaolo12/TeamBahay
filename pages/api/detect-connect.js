const express = require("express");
const app = express();
const port = process.env.port || 3001;
const mysql = require("mysql2");
// const bodyParser = require("body-parser");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "data",
});

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
// app.use(bodyParser.json({ limit: "50mb" }));


// Create
app.post("/camera", (req, res) => {
  // create query to db
  connection.execute(
    "INSERT INTO `movement_detection` (image, start, end) VALUES (?, ?, ?)",
    [req.body.image, req.body.start, req.body.end],
    (err, results, fields) => {
      if (err) throw err;
      res.json({
        message: `New motion recorded.`,
        inserted_at_id: results.insertId,
      });
      console.log(
        JSON.stringify({
          message: `New motion recorded.`,
          inserted_at_id: results.insertId,
        })
      );
    }
  );
});


app.get("/data", (req, res) => {
  connection.query("SELECT * FROM movement_detection", (err, results) => {

      try {

          if (results.length > 0) {
              let new_result = [];
              for (let i = 0; i < results.length; i++) {
                  new_result.push({
                      id: results[i].id,
                      image: new Buffer.from(results[i].image).toString("utf8"),
                      start: results[i].start,
                      end: results[i].end
                  })
              }
              res.json(new_result)
          } else {
              res.json({ message: 'No added data' });
          }
      } catch (err) {
          res.json({ message: err });
      }
  });
});




app.listen(port, () => {
  console.log(`Port running on ${port}`);
});