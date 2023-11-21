import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { UserService } from "~/server/services/user";

export const userRouter = createTRPCRouter({
  getMe: publicProcedure.query(() => UserService.getMe()),
});
