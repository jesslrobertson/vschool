const express = require("express");
const app = express();
const morgan = require("morgan")

//middleware//

app.use(express.json());
app.use(morgan("dev"))
app.use("/books", require("./routes/bookRouter.js"));
app.use("/tvShows", require("./routes/tvShowRouter"));


//Server Listen //
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
