import dotenv from "dotenv";

import { mongoConnect } from "./utils/mongo.js";

async function startServer() {
  await mongoConnect();
}

startServer();

// username: AsaadKhan
// password:texinity123
