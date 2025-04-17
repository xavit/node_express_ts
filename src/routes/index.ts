import express from "express";

import messageResponse from "../interfaces/message_response";

import hello from "./hello";

const router = express.Router();
// Define the root route
router.get<{}, messageResponse>("/", (req, res) => {
  res.json({
    status: "success",
    message: "Router API",
    data: null,
  } as messageResponse);
});

router.use("/hello", hello);

export default router;
