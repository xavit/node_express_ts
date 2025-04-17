import express from "express";
import MessageResponse from "./interfaces/message_response";

import routes from "./routes";

const app = express();
app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    status: "success",
    message: "Root route",
    data: null,
  } as MessageResponse);
});

app.use("/api/v1", routes);

export default app;
