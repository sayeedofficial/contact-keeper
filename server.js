const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Contact Keeper API" });
});

app.use("/api/users", require("./Routes/users"));
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/contacts", require("./Routes/contacts"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on PORT ${port}`);
});
