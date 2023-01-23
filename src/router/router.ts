import express from "express";

import { scrapeArticlesHandler } from "../controllers/scrape.controller";
import { targets } from "../utils/scrapeTargets";
import { articleHandler } from "../controllers/article.controller";

const router = express.Router();

router.get("/healthcheck", (_, res) => res.send("I am okay"));

router.get("/super-secret-scrape", scrapeArticlesHandler(targets));

router.get("/articles", articleHandler);

export default router;
