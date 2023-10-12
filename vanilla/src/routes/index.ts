import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "../context.js";
import express from "express";
import { appRouter } from "./appRouter.js";

export const initApiRoutes = async (app: ReturnType<typeof express>) => {
  const router = await appRouter();
  const trpcBase = "/trpc";
  app.use(
    trpcBase,
    trpcExpress.createExpressMiddleware({
      router,
      createContext,
    })
  );
};
