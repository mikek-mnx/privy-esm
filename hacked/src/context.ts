import { inferAsyncReturnType } from "@trpc/server";
import * as express from "express";
import { getServices } from "./services.js";

type NodeHTTPCreateContextFnOptions<TRequest, TResponse> = {
  req: TRequest;
  res: TResponse;
};

export const createContext = async ({
  req,
}: NodeHTTPCreateContextFnOptions<express.Request, express.Response>) => {
  const services = await getServices({
    PRIVY_APP_ID: "TODO",
    PRIVY_SECRET: "TODO",
  });

  let accessToken: string | undefined = undefined;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    accessToken = req.headers.authorization.split(" ")[1];

  if (accessToken) {
    try {
      const authToken = await services.privyClient.verifyAuthToken(accessToken);

      return { authToken };
    } catch (_) {
      // Maybe some logging here?
    }
  }

  return { authToken: null, user: null };
};

export type Context = inferAsyncReturnType<typeof createContext>;
