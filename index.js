// Por favor ingresar las credenciales que me proporcionaron en database.js
// para correr el programa.

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const pool = require("./database");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3036;

//handlebars settings
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/read", async (req, res) => {
  const warehouses = await pool.query(
    "SELECT name, headquarters_number, created_at, updated_at  FROM warehouse;"
  );
  res.render("read", { warehouses, title: "Read" });
});

app.get("/create", async (req, res) => {
  res.render("create", { title: "Create" });
});

app.post("/create", async (req, res) => {
  const { name, headquarters_number, created_at, updated_at } = req.body;
  const message = { name, headquarters_number, created_at, updated_at };
  await pool.query("INSERT INTO warehouse set ?;", [message]);
  console.log("Created!");
  res.redirect("/read");
});

app.get("/update", async (req, res) => {
  res.render("update", { title: "Update" });
});

app.post("/update", async (req, res) => {
  const { name, new_name } = req.body;
  const message = { name, new_name };
  await pool.query("UPDATE warehouse SET name = name FROM WHERE name = new_name;", [message]);
  // await pool.query(
  //   "UPDATE warehouse set ? WHERE set ?;",
  //   [message]
  // );
  console.log("Updated!");
  res.redirect("/read");
});


app.get("/delete", async (req, res) => {
  res.render("delete", { title: "Delete" });
});

app.post("/deletebyname", async (req, res) => {
  const { name } = req.body;
  const message = { name };
  await pool.query(
    "DELETE FROM warehouse WHERE set ?;",
    [message]
  );
  res.redirect("/read");
});

app.post("/delete", async (req, res) => {
  await pool.query("DELETE * FROM warehouse;");
  console.log("Deleted all");
  res.redirect("/read");
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
