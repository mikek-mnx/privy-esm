import { publicProcedure, router } from "../trpc.js";

export const getDummyRouter = async () => {
  return router({
    hello: publicProcedure.query(async () => {
      return "Hello!";
    }),
  });
};
