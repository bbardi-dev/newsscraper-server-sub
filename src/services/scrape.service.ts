import { Article } from "@prisma/client";
import prisma from "../prisma/client";

export async function saveScrapedArticles(scrapeData: Article[]) {
  return prisma.article.createMany({
    data: scrapeData,
    skipDuplicates: true,
  });
}
