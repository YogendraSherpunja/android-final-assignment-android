require("./db/mongoose");
const express = require("express");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const uploadRouter = require("./controllers/uploadImage");
const commentRouter = require("./routes/commentRoute");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/", userRouter);
app.use("/api/", postRouter);
app.use("/api/", uploadRouter);
app.use("/api/", commentRouter);

app.listen("9000", function() {
  console.log("server is running at 9000");
});
