import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export async function findArticles(options?: Prisma.ArticleFindManyArgs) {
  return prisma.article.findMany(options);
}
