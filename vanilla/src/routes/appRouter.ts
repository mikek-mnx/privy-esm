import { mergeRouters } from "../trpc.js";
import { getDummyRouter } from "./dummyRouter.js";

export const appRouter = async () => mergeRouters(await getDummyRouter());

export type AppRouter = Awaited<ReturnType<typeof appRouter>>;
