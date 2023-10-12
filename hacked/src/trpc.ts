import { TRPCError, initTRPC } from '@trpc/server';
import type { Context } from './context.js';

const trpc = initTRPC.context<Context>().create();

export const router = trpc.router;
export const mergeRouters = trpc.mergeRouters;
export const publicProcedure = trpc.procedure;

const isPrivyAuthed = trpc.middleware(async ({ ctx, next }) => {
  // check to make sure that the token was valid.
  // you can add further logic here, such as checking if the user is an admin,
  // if you added more user context within `createContext` method.
  if (!ctx.authToken || !ctx.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Not authenticated',
    });
  }
  return next({
    ctx,
  });
});

export const protectedProcedure = trpc.procedure.use(isPrivyAuthed);
