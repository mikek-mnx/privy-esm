import express from 'express';
import cors from 'cors';

export const initMiddleware = (app: ReturnType<typeof express>) => {
  app.use(cors());
};
