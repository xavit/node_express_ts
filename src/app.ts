import express from "express";
import MessageResponse from "./interfaces/message_response";
import * as middlewares from "./middlewares";
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

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
