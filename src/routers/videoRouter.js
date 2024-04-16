import express from "express";
import {
  upload,
  watch,
  deleteVideo,
  getEdit,
  postEidt,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEidt);

export default videoRouter;
