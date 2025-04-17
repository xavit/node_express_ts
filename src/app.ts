import express from "express";
import MessageResponse from "./interfaces/message_response";

const app = express();
const PORT = process.env.PORT || 3000;

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the API",
    data: null,
  } as MessageResponse);
});

export default app;
