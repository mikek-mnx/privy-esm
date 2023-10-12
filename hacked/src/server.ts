import express from "express";
import { initApiRoutes } from "./routes/index.js";
import { initMiddleware } from "./middleware.js";

const app = express();

initMiddleware(app);
await initApiRoutes(app);

const port = 5000;
const listenAddress = "0.0.0.0";

app.listen(port, listenAddress);
console.log(`API Listening on ${listenAddress}:${port}`);
