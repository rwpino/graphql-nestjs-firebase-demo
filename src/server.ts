import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as admin from 'firebase-admin';
export const app = async (expressInstance?) => {
  admin.initializeApp();
  const appServer = await NestFactory.create(
    AppModule,
    expressInstance ? new ExpressAdapter(expressInstance) : undefined,
  );
  return appServer;
};
