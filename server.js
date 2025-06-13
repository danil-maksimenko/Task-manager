const express = require("express");
const path = require("path");
const connectToDatabase = require("./config/database");

const indexRoutes = require("./app/routes/index.routes");
const taskRoutes = require("./app/routes/task.routes");
const cycleRoutes = require("./app/routes/cycle.routes");
const memberRoutes = require("./app/routes/member.routes");
const logoutRoutes = require("./app/routes/logout.routes");
const killRoutes = require("./app/routes/kill.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Connect to MongoDB
connectToDatabase();

// ✅ Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app/views"));

// ✅ Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ✅ Routes
app.use("/", indexRoutes);
app.use("/board", taskRoutes);
app.use("/cycles", cycleRoutes);
app.use("/members", memberRoutes);
app.use("/logout", logoutRoutes);
app.use("/kill", killRoutes);

// ✅ 404 Page
app.use((req, res) => {
  res.status(404).render("pages/404", {
    title: "Page Not Found",
    message: "The page you are looking for does not exist.",
  });
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ SERVER ERROR:", err.stack);
  res.status(500).render("pages/500", {
    title: "Server Error",
    message: "Something went wrong on the server.",
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
