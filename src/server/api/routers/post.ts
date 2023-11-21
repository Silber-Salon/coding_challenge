import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { PostService } from "~/server/services/post";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

  getFavouritesByUser: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(({ input }) => PostService.getFavouritePosts(input.userId)),
  getAllByUser: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(({ input }) => PostService.getAllPosts(input.userId)),
});
